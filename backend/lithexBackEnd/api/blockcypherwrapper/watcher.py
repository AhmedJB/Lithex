from blockcypher import *
from api.KrakenWorker.worker import Worker
from api.Web3Wrapper.worker import Web3Worker
import time
from api.constants import rpc_urls,chain_ids
from api.models import Transactions


token = "a42bd1d9e2364e32b47e3339d6f54329"
eth_test_deposit_address = "0x4D3B427Bb4cC0B465b5f0621b9980965f13A3a79"
deposit_method = {'method' : 'Ethereum (ERC20)'}
poly_deposit_method = {'method' : 'Polygon (MATIC)'}
btc_test_deposit_address = "C8o8jCsfkkjivnak633saX559Vn3WSrQbr"



def handle_native_deposit(coin,deposit_addr,symbol,balance_obj):
    balance = get_confirmed_balance(deposit_addr.address,coin_symbol = coin,api_key=token)
    if balance == balance_obj.old_balance:
        print("no deposit yet for " + symbol)
    else:
        print("new deposit for " + symbol)
        balance_obj.balance += (balance - balance_obj.old_balance) * (1-balance.coin.d_fee)
        balance_obj.old_balance = balance
        tr = Transactions.objects.create(user = deposit_addr.user, coin = balance_obj.coin,
         message = "Received Deposit of " + str(round( (balance - balance_obj.old_balance ) / 10 ** balance_obj.coin.decimals , balance_obj.coin.decimals )) + " " + symbol,
         t_type = "deposit"
         )
        tr.save()
        balance_obj.save()
        w = Worker()
        if symbol == "ETH":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
        elif symbol == 'BTC':
            addr = btc_test_deposit_address
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
        
def handle_web3_deposit(deposit_addr,symbol,balance_obj,network):
    w3w = Web3Worker(rpc_urls[network],chain_ids[network])
    balance = w3w.get_confirmed_balance(deposit_addr.address)
    if balance == balance_obj.old_balance:
        print("no deposit yet for " + symbol)
    else:
        print("new deposit for " + symbol)
        balance_obj.balance += (balance - balance_obj.old_balance) * (1-balance.coin.d_fee)
        balance_obj.old_balance = balance
        tr = Transactions.objects.create(user = deposit_addr.user, coin = balance_obj.coin,
         message = "Received Deposit of " + str(round( (balance - balance_obj.old_balance ) / 10 ** balance_obj.coin.decimals , balance_obj.coin.decimals )) + " " + symbol,
         t_type = "deposit"
         )
        tr.save()
        balance_obj.save()
        w = Worker()
        if symbol == "ETH":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            addr = eth_test_deposit_address
        elif symbol == 'BTC':
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            addr = btc_test_deposit_address
        elif symbol == "BNB":
            addr = w.get_deposit_address(symbol=symbol,params=deposit_method)
            addr = eth_test_deposit_address
        elif symbol == "MATIC":
            addr = w.get_deposit_address(symbol=symbol,params=poly_deposit_method)
            addr = eth_test_deposit_address
        else:
            addr = w.get_deposit_address(symbol=symbol)
        
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



