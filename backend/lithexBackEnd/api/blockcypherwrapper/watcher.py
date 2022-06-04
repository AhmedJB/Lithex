from blockcypher import *
import uuid
from api.KrakenWorker.worker import Worker
from api.Web3Wrapper.worker import Web3Worker
import time
from api.constants import rpc_urls,chain_ids
from api.models import Transactions
from api.serializer import AddressSerializer
from api.abis import erc20_abi
from web3 import Web3
from api.utils import create_transaction_log


token = "a42bd1d9e2364e32b47e3339d6f54329"
eth_test_deposit_address = "0x4D3B427Bb4cC0B465b5f0621b9980965f13A3a79"
deposit_method = {'method' : 'Ethereum (ERC20)'}
poly_deposit_method = {'method' : 'Polygon (MATIC)'}
methods = {
    "ETH" : deposit_method,
    "MATIC" : poly_deposit_method
}
btc_test_deposit_address = "C8o8jCsfkkjivnak633saX559Vn3WSrQbr"



def handle_native_deposit(coin,deposit_addr,symbol,balance_obj):
    balance = get_confirmed_balance(deposit_addr.address,coin_symbol = coin,api_key=token)
    if balance == balance_obj.old_balance:
        print("no deposit yet for " + symbol)
    else:
        print("new deposit for " + symbol)
        balance_obj.balance += (balance - balance_obj.old_balance) * (1-balance_obj.coin.d_fee)
        
        formated_amount = ("{0:."+str(balance_obj.coin.decimals)+"f}").format(round( ((balance - balance_obj.old_balance) * (1-balance_obj.coin.d_fee) ) / 10 ** balance_obj.coin.decimals , balance_obj.coin.decimals ))
        create_transaction_log(deposit_addr.user,balance_obj.coin,
        "Received Deposit of " + formated_amount + " " + symbol,
        "deposit"
        )
        balance_obj.old_balance = balance
        
        
        balance_obj.save()
        w = Worker()
        if symbol == "ETH":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
        elif symbol == 'BTC':
            #addr = btc_test_deposit_address

            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
        else:
            addr = w.get_deposit_address(symbol=symbol)
        try:
            
            tx = simple_spend(from_privkey=deposit_addr.private,to_address = addr,api_key=token, to_satoshis=int(balance-100000),coin_symbol=coin)
            new_balance = get_confirmed_balance(deposit_addr.address,coin_symbol = coin,api_key=token)
            while balance == new_balance:
                time.sleep(2)
                new_balance = get_confirmed_balance(deposit_addr.address,coin_symbol = coin,api_key=token)
            balance_obj.old_balance = new_balance
            balance_obj.save()
        except Exception as e:
            print("error")
            print(str(e))
            print("failed grouping to main wallet")



def signAndSendTransaction(w3,tx,privateKey):
    signed_tx = w3.eth.account.signTransaction(tx,privateKey)
    tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
    return (w3.toHex(tx_hash))

def calculate_method_fees(w3,contract,method,account,*args):
    print(args)
    transaction = contract.functions[method](*args).buildTransaction({
        'gas' : 500000,
        'nonce' : w3.eth.getTransactionCount(account),
        'from' : account
    })
    
    gas = w3.eth.estimateGas(transaction)
    print(gas)
    return gas * w3.eth.gasPrice,transaction
    
def buildTransaction(contract,method,params,*args):
    transaction = contract.functions[method](*args).buildTransaction(params)
    return transaction

def get_contract_balance(contract,acc):
    balance = call_read_method(contract,"balanceOf",Web3.toChecksumAddress(acc['address']))
    return balance

def load_contract(w3,add,abi):
    return w3.eth.contract(address=add , abi= abi)
def call_read_method(contract,method,*args):
    res = contract.functions[method](*args).call()
    return res
def call_write_method(w3,contract,method,acc,*args):
    params = {
        'gas' : 30000,
        'nonce' : w3.eth.getTransactionCount(acc['address']),
        'chainId' : 4,
        'from' : acc['address']
    }
    gas = contract.functions[method](*args).estimateGas({
    "from" : acc['address']
    })
    params['gas'] = gas
    transaction = buildTransaction(contract,method,params,*args)
    txn =  signAndSendTransaction(w3,transaction,acc['private'])
    return txn

def handle_token_deposit(deposit_add,coin,balance_obj,network):
    w3w = Web3Worker(rpc_urls[network.symbol],chain_ids[network.symbol])
    w = Worker()
    old_deposit_add = deposit_add
    deposit_add = AddressSerializer(deposit_add).data
    contract = load_contract(w3w.w3,coin.address,erc20_abi)
    new_bal = get_contract_balance(contract,deposit_add)
    print(new_bal)
    if new_bal > balance_obj.old_balance:
        print("new deposit for " + coin.symbol)
        fee_balance = w3w.get_confirmed_balance(w3w.w3.toChecksumAddress(deposit_add['address']))
        fee_balance = w3w.w3.fromWei(fee_balance,"ether")
        print('fees estimate')
        print(fee_balance)
        print(network.token_fee)
        if float(fee_balance) >= float(network.token_fee):
            print("fee paid")
            print("transfering tokens ")

            try:
                master_add = w3w.w3.toChecksumAddress(w.get_deposit_address(coin.symbol.upper()))
                master_address = { "address" : master_add}
                master_eth_address = w.get_deposit_address(network.symbol.upper(),methods[network.symbol.upper()])
                master_old_balance = get_contract_balance(contract,master_address)
                txn = call_write_method(w3w.w3,contract,'transfer',deposit_add,master_add,new_bal)
                print(txn)
                current_balance = get_contract_balance(contract,master_address)
                while current_balance == master_old_balance:
                    time.sleep(2)
                    current_balance = get_contract_balance(contract,master_address)
                print("new deposit for " + coin.symbol)
                deposit_amount = (new_bal - balance_obj.old_balance) * (1-balance_obj.coin.d_fee)
                balance_obj.balance += deposit_amount
                
                formated_amount = ("{0:."+str(balance_obj.coin.decimals)+"f}").format(round( ((new_bal - balance_obj.old_balance) * (1-balance_obj.coin.d_fee) ) / 10 ** balance_obj.coin.decimals , balance_obj.coin.decimals ))
                create_transaction_log(old_deposit_add.user,balance_obj.coin,
                    "Received Deposit of " + formated_amount + " " + coin.symbol,
                    "deposit"
                    )
                n_bal = get_contract_balance(contract,deposit_add)
                balance_obj.old_balance = n_bal
                
                balance_obj.save()
                print("transfering the fees")
                #tx = transfer(w3,master_add,deposit_add,
                #w3w.get_confirmed_balance(deposit_add['address']))
                tx = w3w.transferFull(master_eth_address,old_deposit_add)
                if tx:
                    bal = w3w.get_confirmed_balance(deposit_add['address'])
                    print('transfered fees')
                    
                else:
                    print('failed transfering fees')
                    
            except Exception as e:
                print(str(e))
                print("failed transfer")
        else:
            print("fee not paid")
    else:
        print("old")




        
def handle_web3_deposit(deposit_addr,symbol,balance_obj,network):
    w3w = Web3Worker(rpc_urls[network],chain_ids[network])
    balance = w3w.get_confirmed_balance(deposit_addr.address)
    if balance == balance_obj.old_balance:
        print("no deposit yet for " + symbol)
    else:
        print("new deposit for " + symbol)
        balance_obj.balance += (balance - balance_obj.old_balance) * (1-balance_obj.coin.d_fee)
        
        formated_amount = ("{0:."+str(balance_obj.coin.decimals)+"f}").format(round( ((balance - balance_obj.old_balance) * (1-balance_obj.coin.d_fee) ) / 10 ** balance_obj.coin.decimals , balance_obj.coin.decimals ))
        create_transaction_log(deposit_addr.user,balance_obj.coin,
        "Received Deposit of " + formated_amount + " " + symbol,
        "deposit"
        )
        balance_obj.old_balance = balance
        
        
        balance_obj.save()
        w = Worker()
        if symbol == "ETH":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            addr = w3w.w3.toChecksumAddress(addr)
            #addr = eth_test_deposit_address
        elif symbol == 'BTC':
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            #addr = btc_test_deposit_address
        elif symbol == "BNB":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            addr = w3w.w3.toChecksumAddress(addr)
            #addr = eth_test_deposit_address
        elif symbol == "MATIC":
            addr = w.get_deposit_address(symbol=symbol,params=poly_deposit_method)
            addr = w3w.w3.toChecksumAddress(addr)
            #addr = eth_test_deposit_address
        else:
            addr = w.get_deposit_address(symbol=symbol)
            addr = w3w.w3.toChecksumAddress(addr)
        
        try:
            tx = w3w.transferFull(addr,deposit_addr)
            if tx:
                new_balance = w3w.get_confirmed_balance(deposit_addr.address)
                while balance == new_balance:
                    time.sleep(2)
                    new_balance = w3w.get_confirmed_balance(deposit_addr.address)
                balance_obj.old_balance = new_balance
                balance_obj.save()
            else:
                print("######")
                print("transfer failed for " + symbol)
        except Exception as e:
            print(str(e))
            print("failed web3 deposit to main wallet")


        








def get_address(coin):
    return generate_new_address(coin,api_key=token)



