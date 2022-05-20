import time
from celery import shared_task
from api.kycwrapper.handler import Handler
from api.models import Documents,CustomUser,DocumentTicket,Balance,WithdrawSettings,Coin
from api.KrakenWorker.worker import Worker
from api.blockcypherwrapper.watcher import handle_native_deposit,handle_web3_deposit,handle_token_deposit
import requests
from api.constants import api_url



@shared_task
def test(r):
    print('test')
    print(r)
    for i in range(r):
        print(i)

@shared_task
def createCustomer(data,user_id):
    user = CustomUser.objects.filter(id=user_id).first()
    h = Handler()
    res = h.create_customer(data)
    user.cus_id = res['id']
    user.save()




@shared_task
def verify(user_id,ticket_id):
    user = CustomUser.objects.filter(id=user_id).first()
    ticket = DocumentTicket.objects.filter(id=ticket_id).first()

    h = Handler()
    front_doc = Documents.objects.filter(ticket=ticket,doc_type='front').first()
    back_doc = Documents.objects.filter(ticket=ticket,doc_type='back').first()
    selfie_doc = Documents.objects.filter(ticket=ticket,doc_type='selfie').first()
    files = [
        {
			'type' : 'front',
			'path' : front_doc.file.path
		},
		{
			'type' : 'back',
			'path' : back_doc.file.path
		}
    ]
    doc_res = h.upload_documents(files,customer=user.cus_id)
    if doc_res:
        ticket.document_id = doc_res['id']
        test_res = h.verification(selfie_doc.file.path,customer=user.cus_id,doc_id=doc_res['id'])
        if test_res:
            ticket.match = test_res['face_match']
            ticket.score = float(test_res['similarity'])
            ticket.api_reviewed  = True
            ticket.api_status = "done"
            ticket.save()
            print("done checking")
            
        else:
            print("doc scanning failed")
            ticket.api_reviewed = True
            ticket.api_status = "refused"
            ticket.save()


    else:
        print('doc upload failed')
        ticket.api_reviewed = True
        ticket.api_status = "refused"
        ticket.save()


@shared_task
def fiat_watcher():
    worker = Worker()
    worker.watch_convert_fiat()

@shared_task
def ust_watcher():
    worker = Worker()
    worker.convert_to_ust()

@shared_task
def withdraw_watcher(active):
    sett = WithdrawSettings.objects.all()[0]
    disabled = sett.disable_ust_withdrawals
    if not disabled:
        worker = Worker()
        worker.withdraw()
    else:
        print("withdrawal not active")




def handleResp(resp):
    if (resp['status']):
        return resp['message']
    else:
        return False



@shared_task
def anchorBalanceWatcher():
    sett = WithdrawSettings.objects.all()[0]
    disabled = sett.disable_ust_sweep
    if not disabled:
        resp =  requests.post(api_url + "api/anchor")
        res = handleResp(resp.json())
        if res:
            resp2 = requests.post(api_url + "api/anchor/deposit")
            res2 = handleResp(resp2.json())
            if res2:
                print("success deposit to anchor")

            else:
                print('failed deposit to anchor')

        else:
            print("not enough balance to deposit to anchor")
    else:
        print('Sweep Disabled Currently')

def get_bal():
    resp = requests.get(api_url + "api/anchor/balance")
    resp = resp.json()
    return resp['data']['account_balance']

@shared_task
def Unstake():
    print('disabling Sweeps')
    sett = WithdrawSettings.objects.all()[0]
    sett.disable_ust_sweep = True
    sett.save()
    print("starting Unstaking")
    w = Worker()
    address = w.get_deposit_address("UST")
    test_add = "terra1f2fgl9wyuz8k2qdj2ywtk3ksz7qgxvdcs2y7xd"
    print("Deposit Address " + address)
    data = {
        "address" : test_add
    }
    old_balance = get_bal()
    print(old_balance)
    resp = requests.post(api_url + "api/anchor/withdraw" )
    print("after request withdraw")
    for _ in range(36):
        bal = get_bal()
        print("new Balance : " + str(bal))
        if float(bal) > float(old_balance):
            print("withdraw received")
            break
        else:
            print('waiting for 5 secs')
            time.sleep(5)
    print("depositing to kraken")
    resp = requests.post(api_url + "api/anchor/transfer" , json=data)
    resp = resp.json()
    if resp.get('status',False):
        print("success Transfer to Kraken")
    else:
        print("failed to transfer to Kraken")

    sett.disable_ust_sweep = False
    sett.save()
    


        
@shared_task
def DepositWatcher():
    skip = ['GBP','EUR','USD']
    eth_tokens = ["ETH"]
    bsc_tokens = []
    users = CustomUser.objects.filter(is_superuser = False)
    for user in users:
        balances = Balance.objects.filter(user = user)
        for balance in balances:
            if balance.coin.disabled:
                continue
            else:
                if balance.coin.symbol in skip:
                    continue
                else:
                    if balance.coin.symbol == "ETH":
                        #handle_native_deposit('eth',balance.address,balance.coin.symbol,balance)
                        handle_web3_deposit(balance.address,balance.coin.symbol,balance,"ETH")
                    elif balance.coin.symbol == "BTC":
                        handle_native_deposit('bcy',balance.address,balance.coin.symbol,balance)
                    elif balance.coin.symbol == "LTC":
                        handle_native_deposit('ltc',balance.address,balance.coin.symbol,balance)
                    elif balance.coin.symbol == "BNB":
                        handle_web3_deposit(balance.address,balance.coin.symbol,balance,"BNB")
                    elif balance.coin.symbol == "MATIC":
                        handle_web3_deposit(balance.address,balance.coin.symbol,balance,"MATIC")
                    elif balance.coin.token:
                        handle_token_deposit(balance.address,balance.coin,balance,balance.coin.network)


@shared_task
def PriceWatcher():
    k_w = Worker()
    coins = Coin.objects.filter(disabled=False)
    for coin in coins:
        if coin.symbol.upper() == "USD":
            price = 1
        else:
            try:
                price = k_w.get_price(coin.symbol.upper() + "/USD")
            except Exception as e:
                print(str(e))
                price = 0
            
        print("Coin " + coin.symbol.upper() + " Price is : " + str(price))
        coin.usd_value = float(price)
        coin.save()
    print("#### Done updating prices ####")







@shared_task
def printCheck(text):
    print(text)