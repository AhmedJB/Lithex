

from celery import shared_task
from api.kycwrapper.handler import Handler
from api.models import Documents,CustomUser,DocumentTicket,Balance
from api.KrakenWorker.worker import Worker
from api.blockcypherwrapper.watcher import handle_native_deposit,handle_web3_deposit
import requests


api_url = "http://localhost:3010/"

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
    if active:
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
                        handle_native_deposit('eth',balance.address,balance.coin.symbol,balance)
                    elif balance.coin.symbol == "BTC":
                        handle_native_deposit('bcy',balance.address,balance.coin.symbol,balance)
                    elif balance.coin.symbol == "LTC":
                        handle_native_deposit('ltc',balance.address,balance.coin.symbol,balance)
                    elif balance.coin.symbol == "BNB":
                        handle_web3_deposit(balance.address,balance.coin.symbol,balance,"BNB")
                    elif balance.coin.symbol == "MATIC":
                        handle_web3_deposit(balance.address,balance.coin.symbol,balance,"MATIC")









@shared_task
def printCheck(text):
    print(text)