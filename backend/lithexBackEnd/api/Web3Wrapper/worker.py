from web3 import Web3
from api.constants import rpc_urls,chain_ids

class Web3Worker:
    def __init__(self,rpc_url,chainId):
        self.w3 = Web3(Web3.HTTPProvider(rpc_url))
        self.chainId = chainId


    def gen_address(self):
        account = self.w3.eth.account.create()
        res = {
            "public" : account.address,
            "private" : account.privateKey.hex(),
            "address" : account.address
        }
        return res

    def get_confirmed_balance(self,address):
        return self.w3.eth.getBalance(Web3.toChecksumAddress(address))

    def signAndSendTransaction(self,tx,privateKey):
        try:
            signed_tx = self.w3.eth.account.signTransaction(tx,privateKey)
            tx_hash = self.w3.eth.sendRawTransaction(signed_tx.rawTransaction)
            return (self.w3.toHex(tx_hash))
        except Exception as e:
            print(str(e))
            return False
    

    def transferFull(self,to,from_acc):
        address = Web3.toChecksumAddress(from_acc.address)
        amount = self.get_confirmed_balance(address)
        print(amount)
        nonce = self.w3.eth.getTransactionCount(address)
        tx = {
        'chainId' : self.chainId,
        'nonce': nonce,
        'to': to,
        'value': amount,
        'gas': 21000,
        'gasPrice': self.w3.eth.gasPrice
        }
        gas = self.w3.eth.estimateGas(tx)
        tx['value'] = tx['value'] - (gas * self.w3.eth.gasPrice)
        tx['gas'] = gas
        tx_hash = self.signAndSendTransaction(tx,from_acc.private)
        return tx_hash
