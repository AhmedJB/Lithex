from venv import create
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .serializer import DepositDocsSerializer,BankDetailsSerializer, SupportTicketsSerializer, UserRequestsSerializer , RegisterSerializer, TransactionsSerializer,DocumentSerializer,PersonalInfoSerializer,TicketSerializer,BalanceSerializer,CoinSerializer
from .tasks import test,createCustomer,verify,Unstake
from .blockcypherwrapper.watcher import get_address
# Create your views here.

from .models import *


from .constants import base
from api.Web3Wrapper.worker import Web3Worker
from api.KrakenWorker.worker import Worker
from api.constants import rpc_urls,chain_ids,fiats
import math
from api.utils import checkEmail
from api.constants import api_url
import requests
from web3 import Web3
import uuid
from api.utils import create_transaction_log



class TestSession(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        user = request.user
        if (user.is_superuser):
            url_path = "/panelad/users"
            super_user = True
        else:
            url_path = "/app/profile"
            super_user = False
            
        print(f'User is {user}')
        u = RegisterSerializer(user).data
        u['path'] = url_path
        u['s'] = super_user
        return Response(u)


def format_error(err):
    st = []
    for key in err.keys():
        st.append(key + " : " + str(err[key][0]))
    return st

def form_error_resp(message,failed=True):
        return Response({'failed' : failed,"message" : message})

def generateAddr(network):
    w3w = Web3Worker(rpc_urls[network],chain_ids[network])
    return w3w.gen_address()



class Register(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self,request,format=None):
        skip = ['GBP','EUR','USD']
        eth_tokens = ['ETH']
        BSC_tokens = ["BNB"]
        MATIC_tokens = ["MATIC"]
        LTC_tokens = ['LTC']
        data = request.data
        print(data)
        o_u = CustomUser.objects.filter(email = data['username'])
        coins = Coin.objects.filter(disabled=False)
        if len(o_u) == 0:
            s = RegisterSerializer(data=data)
            if s.is_valid():
                print('valid')
                resp = s.save()
                user = CustomUser.objects.filter(id=resp['id']).first()
                eth_address = get_address("eth")
                btc_address = get_address("bcy")
                ltc_address = get_address("ltc")
                bsc_address = generateAddr("BNB")
                matic_address = generateAddr("MATIC")
                eth_address['address'] = Web3.toChecksumAddress(eth_address['address'])
                print(eth_address)
                for coin in coins:
                    if coin.symbol in skip:
                        network = "FIAT"
                        chosen = bsc_address
                    elif coin.symbol in eth_tokens:
                        network = 'ETH'
                        chosen = eth_address
                    elif coin.symbol in BSC_tokens:
                        network = 'BSC'
                        chosen = bsc_address
                    elif coin.symbol in MATIC_tokens:
                        network = 'MATIC'
                        chosen = matic_address
                    elif coin.symbol in LTC_tokens:
                        network = "LTC"
                        chosen = ltc_address
                    elif coin.symbol == 'BTC':
                        network = "BTC"
                        chosen = btc_address
                    elif coin.network.symbol == "ETH" and coin.token:
                        e_add = get_address("eth")
                        print(e_add)
                        e_add['address'] = Web3.toChecksumAddress(e_add['address'])
                        network = "ETH"
                        chosen = e_add
                    elif coin.network.symbol == "MATIC" and coin.token:
                        e_add = generateAddr("MATIC")
                        
                        network = "MATIC"
                        chosen = e_add
                    
                    addr = Address.objects.create(user = user,public=chosen['public'],private=chosen['private'],address=chosen['address'],network=network)
                    addr.save()
                    balance = Balance.objects.create(user= user,coin=coin,address = addr)
                    balance.save()
                print(resp)
                return Response(resp)
            else:
                print('not valid')
                err = format_error(s.errors)
                print(err)
                return Response({'failed':True,'result':err})
        else:
            return Response({'failed':True,'message':"Email Used"},status.HTTP_400_BAD_REQUEST)


# upload functionality

class UploadAuth(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def get(self, request, *args, **kwargs):
        user = request.user
        docs = Documents.objects.filter(user=user)
        serializer = DocumentSerializer(docs, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        user = request.user
        data = request.data
        
        ticket_data = {
            "user" : user.id,
            "status" : "open",
            "ticket_type"  : data.get("ticket_type",None)
        }
        ticket_serializer = TicketSerializer(data=ticket_data)
        if ticket_serializer.is_valid():
            ticket = ticket_serializer.save()
            #files = dict(data.lists())['file']
            
            #print(type(files))
            #input(files)
            final_resp = []
            if True:
                keys = ['front','back','selfie']
                for key in keys:
                    print(key)
                    file = data.get(key,False)
                    if file:
                        doc_data = {
                            "ticket" : ticket.id,
                            "doc_type" : key,
                            "file" : file
                        }
                        Doc_serializer = DocumentSerializer(data=doc_data)
                        if Doc_serializer.is_valid():
                            resp = Doc_serializer.save()
                            final_resp.append(resp)
                        
                        else:
                            ticket.delete()
                            print('error', Doc_serializer.errors)
                            return Response(Doc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        return Response('no files found', status=status.HTTP_400_BAD_REQUEST)
                old_ticket = DocumentTicket.objects.filter(user= user, api_reviewed = True, api_status = "refused").first() or DocumentTicket.objects.filter(user=user,reviewed=True,status = "refused").first()
                if old_ticket:
                    old_ticket.delete()
                verify.delay(user.id,ticket.id)
                return Response(final_resp, status=status.HTTP_201_CREATED)
            else:   
                return Response('no files found', status=status.HTTP_400_BAD_REQUEST)
            
        else:
            print('error', ticket_serializer.errors)
            return Response(ticket_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# get Data 


# get Active coins

class CoinView(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def get(self,request,*args,**kwargs):
        coins = Coin.objects.filter(disabled=False,admin_disabled=False)
        resp = []
        for coin in coins:
            temp = CoinSerializer(coin).data
            network_fee = 0
            if coin.token:
                network_fee = coin.network.token_fee
            temp['network_fee'] = network_fee
            resp.append(temp)

        #resp = CoinSerializer(coins,many=True).data
        return Response(resp)

# get Transactions

class TransactionView(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def get(self,request,*args,**kwargs):
        user = request.user
        transactions = Transactions.objects.filter(user=user).order_by("-date")
        data = TransactionsSerializer(transactions,many=True).data
        for d in data:
            coin = Coin.objects.filter(id=d['coin']).first()
            if coin:
                d['coinData'] = CoinSerializer(coin).data
            else:
                d['coinData'] = False
            
        return Response(data)


# get price with symbol 
def get_coin_price(symbol):
    if symbol.upper() == "USD":
        return 1
    else:    
        coin = Coin.objects.filter(symbol = symbol.upper()).first()
        if coin:
            return float(coin.usd_value)
        else:
            return 0


# get price
class PriceView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,coin,*args,**kwargs):
        print(coin)
        #k_w = Worker()
        if coin == "USD":
            price = 1
        else:
            #price = k_w.get_price(coin+"/USD")
            price = get_coin_price(coin)
        return Response({"price" : price}) 

# swap view
class Swap(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def form_error(self,message,failed=True):
        return {'failed' : failed,"message" : message}

    def round_down(self,num,dec):
        return math.floor(num * 10**dec)/10**dec

    def post(self,request,*args,**kwargs):
        user = request.user
        data = request.data
        amount = float(data['amount'])
        coin1 = Coin.objects.filter(id=data['from'],disabled=False).first()
        coin2 = Coin.objects.filter(id=data['to'],disabled=False).first()
        #k_w = Worker()
        if coin1 and coin2:
            balance1 = Balance.objects.filter(user= user,coin=coin1).first()
            balance2 = Balance.objects.filter(user= user,coin=coin2).first()
            if balance1.balance >= amount:
                #price1 = k_w.get_price(coin1.symbol+"/USD") if coin1.symbol != "USD" else 1
                #price2 = k_w.get_price(coin2.symbol+"/USD") if coin2.symbol != "USD" else 1
                price1 = get_coin_price(coin1.symbol)
                price2 = get_coin_price(coin2.symbol)
                rate = price1 / (price2 * ( 1 + coin2.spread))
                fees = amount * rate * coin2.e_fee
                new_bal = self.round_down((rate * amount ) - fees , 18)
                balance1.balance -= amount * 10 ** balance1.coin.decimals
                balance2.balance += new_bal * 10 ** balance2.coin.decimals
                balance1.save()
                balance2.save()
                msg = "Exchanged {0} {1} for {2} {3}".format(str(amount),coin1.symbol,str(new_bal),coin2.symbol)
                create_transaction_log(user,coin2,msg,"exchange")
                return Response(self.form_error("Successfuly exchanged",failed=False))
            else:
                return Response(self.form_error("You don't have enough balance"))
            


        else:
            return Response(self.form_error("Coin Not Available"))


# subscribe request
class SubscribeRequest(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self,request,*args,**kwargs):
        user = request.user
        data = request.data
        amount = data['amount']
        coin_id = data['id']
        r_type  = data['type']
        coin = Coin.objects.filter(id=coin_id,disabled= False , admin_disabled= False).first()
        if coin:
            balance = Balance.objects.filter(user = user, coin = coin).first()
            if balance:
                if r_type in ['stake','unstake']:
                    print(balance.balance)
                    normalized_amount = float(amount) * 10**coin.decimals
                    if r_type == 'stake':
                        condition  = balance.balance >= normalized_amount
                        message = "Staking {0} of {1}".format(str(amount),coin.symbol)
                    else:
                        condition  = balance.earn >= normalized_amount
                        message = "Unstaking {0} of {1}".format(str(amount),coin.symbol)

                    if condition:
                        
                        tr = create_transaction_log(user,coin,message,r_type,"pending")
                        r = UserRequests.objects.create(transaction = tr,coin= coin,r_type=r_type,amount = float(amount))
                        r.save()
                        return form_error_resp("Request Submitted waiting for admin approval",failed=False)
                    else:
                        return form_error_resp("Your Requested amount exceed your available balance")
                else:
                    return form_error_resp("Action not recognized")
            else:
                return form_error_resp("Error Submitting Request")
            
        else:
            return form_error_resp("Coin not found")



# withdraw request 
class WithdrawRequest(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self,request,*args,**kwargs):
        user = request.user
        data = request.data
        amount = data['amount']
        coin_id = data['id']
        coin = Coin.objects.filter(id=coin_id,disabled= False , admin_disabled= False).first()
        if coin:
            balance = Balance.objects.filter(user = user, coin = coin).first()
            if balance:
                normalized_amount = float(amount) * 10**coin.decimals
                message = "Withdrawing {0} of {1}".format(str(amount),coin.symbol)
                tr = create_transaction_log(user,coin,message,"withdraw","pending")
                print(balance.balance)
                if coin.symbol in fiats :
                    
                    
                    

                    if balance.balance >= normalized_amount:
                        acc_name = data['account_name']
                        bank_name = data['bank_name']
                        bank_code = data['bank_code']
                        transit_number = data['transit_number']
                        account_number = data['account_number']
                        bd = BankDetails.objects.create(account_name = acc_name,bank_name = bank_name , bank_code = bank_code , transit_number = transit_number, account_number = account_number)
                        bd.save()
                        
                        
                        r = UserRequests.objects.create(transaction = tr,coin= coin,r_type="withdraw",amount = float(amount),bank_details = bd)
                        
                    else:
                        return form_error_resp("Your Requested amount exceed your available balance")
                else:
                    if balance.balance >= normalized_amount:
                        address = data['address']
                        
                        r = UserRequests.objects.create(transaction = tr,coin= coin,r_type="withdraw",amount = float(amount),address = address)
                        
                    else:
                        return form_error_resp("Your Requested amount exceed your available balance")
                    
                r.save()
                return form_error_resp("Request Submitted waiting for admin approval",failed=False)
            else:
                return form_error_resp("Error Submitting Request")
            
        else:
            return form_error_resp("Coin not found")


# submit support ticket

class SupportTicketView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self,request,*args,**kwargs):
        user = request.user
        data = request.data
        data['user'] = user.id
        print(data)
        if checkEmail(data.get("email","")):
            s = SupportTicketsSerializer(data=data)
            if s.is_valid():
                s.save()
                return form_error_resp("Sent",failed=False)
            else:
                print(s.error_messages);
                return form_error_resp("Failed Sending Ticket")
        else:
            return form_error_resp("Email Incorrect")

        



# deposit process


class BalanceView(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def get(self,request,*args,**kwargs):
        user = request.user
        balances = Balance.objects.filter(user= user)
        #k_w = Worker()
        res = []
        for balance in balances:
            if balance.coin.disabled or balance.coin.admin_disabled:
                continue
            coin_data = CoinSerializer(balance.coin).data
            if coin_data['symbol'] == "USD":
                price = 1
            else:
                #price = k_w.get_price(coin_data['symbol']+"/USD")
                price = get_coin_price(coin_data['symbol'])
            
            decimals = 1
            if coin_data['symbol'] not in fiats:
                decimals = coin_data['decimals']
                bal = float(balance.balance) / 10**(decimals)
                
            else:
                coin_data['decimals']
                bal = float(balance.balance)
            tok_fee = 0
            sym = ""
            if balance.coin.token:
                tok_fee = balance.coin.network.token_fee
                sym = balance.coin.network.symbol

            coin_data['usd_price'] = round(price * bal,2)
            coin_data['address'] = balance.address.address
            coin_data['balance'] = balance.balance
            coin_data['earn'] = balance.earn
            coin_data['credit'] = balance.credit
            coin_data['token_fee'] = tok_fee
            coin_data['network_symbol'] = sym
            res.append(coin_data)
        
        return Response(res)


class handleDepositDocs(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        pass

    def post(self,request,format=None):
        user = request.user
        data = request.data
        print(data)
        deposit_ticket = DepositTicket.objects.create(user=user)
        deposit_ticket.save()

        coin_id = data.get('coin_id',False)
        if coin_id:
            coin  = Coin.objects.filter(id=coin_id).first()
            if coin:
                doc_data = {
                    'ticket':deposit_ticket.id,
                    'coin' : coin.id,
                    'file' : data['file']
                }
                doc_serializer = DepositDocsSerializer(data=doc_data)
                if doc_serializer.is_valid():
                    resp = doc_serializer.save()
                    return Response(resp,status.HTTP_201_CREATED)

                else:
                    deposit_ticket.delete()
                    return Response({'failed':True,'error' : doc_serializer.errors},status.HTTP_400_BAD_REQUEST)
                
            else:
                return Response({'failed':True},status.HTTP_400_BAD_REQUEST)
        else:
            print("here")
            return Response({'failed':True},status.HTTP_400_BAD_REQUEST)






# verification process

class PersonalInfoView(APIView):
    permission_classes = [permissions.IsAuthenticated]


    def post(self,request,*args,**kwargs):
        user = request.user
        data = request.data
        data['user'] = user.id
        info = PersonalInfo.objects.filter(user = user).first()
        if info:
            s = PersonalInfoSerializer(info,data=data)
        else:
            s = PersonalInfoSerializer(data=data)
        if s.is_valid():
            print('valid')
            user.has_personalInfo = True
            user.save()
            resp = s.save()
            print(resp)
            d = {
                "email" : user.email,
                "first_name" : resp.name,
                "last_name" : resp.surname
            }
            createCustomer.delay(d,user.id)
            return Response(s.data, status=status.HTTP_201_CREATED)
        else:
            print('not valid')
            return Response(s.errors, status=status.HTTP_400_BAD_REQUEST)



class CheckVerifStatus(APIView):

    permission_classes = [permissions.IsAuthenticated]


    def get(self,request,*args,**kwargs):
        user = request.user
        verified = False
        status = ""
        reason = ""
        if not user.has_personalInfo :
            status = "personal"
            path = "/app/user/personal"
        elif user.is_validated:
            status = "verified"
            path = "/app/profile"
            verified = True
        else:
            refused_ticket = DocumentTicket.objects.filter(user=user,reviewed=True,status = "refused").first() or DocumentTicket.objects.filter(user= user, api_reviewed = True, api_status = "refused").first()
            if refused_ticket:
                status = "refused"
                path = "/app/profile"
                if refused_ticket.reason == "":
                    reason = "API Refused"
                else:
                    reason = refused_ticket.reason
                verified = False
            else:
                active_ticket = DocumentTicket.objects.filter(reviewed = False,user=user,api_reviewed = True,api_status="done").order_by('-created').first()
                if active_ticket:
                    if active_ticket.reviewed:
                        if active_ticket.status == "approved":
                            status = "done"
                            path = "/app/profile"
                            verified = True
                        else:
                            status = "refused"
                            reason = active_ticket.reason
                            path = "/app/profile"
                            verified = False

                    else:
                        status = "pending"
                        path = "/app/profile"
                        verified = False
                else:
                    tickets = DocumentTicket.objects.filter(reviewed = False,user=user).order_by('-created').first()
                    if tickets:
                        status = "pending"
                        path = ""
                        verified = False
                    else:
                        status = "upload"
                        path = ""
                        verified = False

            

        resp  = {
            "status" :  status,
            "path"  : path,
            "verified" : verified,
            "hasInfo" : user.has_personalInfo,
            "reason" : reason
        }

        return Response(resp)


class testTask(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self,request):
        test.delay(3)
        return Response({"success": True})



# admin views


class getUserData(APIView) :
    permission_classes = [ permissions.IsAdminUser ]



    def get(self,request,format=None):
        user = request.user
        print(user)
        
        all_users_count =  CustomUser.objects.filter(is_superuser=False).count()
        approved_count = CustomUser.objects.filter(is_validated=True,is_superuser=False).count()
        not_approved_count = all_users_count - approved_count
        tickets = []
        open_tickets = DocumentTicket.objects.filter(api_reviewed = True,reviewed=False).order_by('-created')
        for ticket in open_tickets:
            obj = {
                "id" : ticket.user.id,
                "ticket_id" : ticket.id,
                "username" : ticket.user.username,
                "email" : ticket.user.email,
                "matched" : ticket.match,
                "score" : ticket.score,
                "docs" : []
            }
            docs = Documents.objects.filter(ticket=ticket)
            for doc in docs:
                obj['docs'].append(base + doc.file.url)
            tickets.append(obj)

        resp = {
            "stats" : {
                "all_c" : all_users_count,
                "a_c" : approved_count,
                "n_c" : not_approved_count
            },
            "tickets" : tickets
        }

        return Response(resp);

class setApproval(APIView):
    permission_classes = [ permissions.IsAdminUser ]


    def post(self,request,format=None):
        data= request.data
        user = CustomUser.objects.filter(id=data['user_id']).first()
        ticket = DocumentTicket.objects.filter(id=data['ticket_id']).first()
        if data['approved']:
            user.is_validated = True
            ticket.status = "approved"
            ticket.reviewed = True
            ticket.reason = data['reason']
            user.save()
            ticket.save()
        else:
            user.is_validated = False
            ticket.status = "refused"
            ticket.reviewed = True
            ticket.reason = data['reason']
            user.save()
            ticket.save()
        
        return Response({"done":True})
        

# admin get Deposit Docs

class GetDepositDocs(APIView):

    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        deposit_tickets = DepositTicket.objects.all().order_by('-created')
        tickets = []
        for ticket in deposit_tickets:
            doc = DepositDocs.objects.filter(ticket = ticket).first()
            obj = {
                'id' : ticket.id,
                'username' : ticket.user.username,
                'coin' : CoinSerializer(doc.coin).data,
                'receipt':  base + doc.file.url
            }
            tickets.append(obj)
        return Response(tickets)


# approve balance 



class ApproveBalanceView(APIView):

    permission_classes = [ permissions.IsAdminUser ]

    def post(self,request,format=None):
        data = request.data
        ticket = DepositTicket.objects.filter(id=data['id']).first()
        coin = Coin.objects.filter(id=data['coin']['id']).first()
        if ticket and coin :
            
            status = data['status']
            if status:
                try:
                    amount = float(data['amount'])
                except:
                    return Response({"failed" : True, "reason" : "not correct amount"},status.HTTP_400_BAD_REQUEST)
                balance=  Balance.objects.filter(user = ticket.user , coin = coin).first()
                if balance:
                    balance.balance += amount
                    

                    create_transaction_log(ticket.user,coin,"Received Deposit of " + str(round( (amount) / 10 ** coin.decimals , coin.decimals )) + " " + coin.symbol,"deposit")
                  
                    balance.save()
                    ticket.delete()
                    return Response({"failed": False,"reason" : "Balance Modified"})
                else:
                    return Response({"failed" : True, "reason" : "Balance not found"},status.HTTP_400_BAD_REQUEST)
            else:
                ticket.delete()
                return Response({"failed" : False, "reason" : "Ticket Rejected"})
                    

           
        else:
            return Response({"failed":True,"reason" : "no ticket or coin found"},status.HTTP_400_BAD_REQUEST)    


# fetch user details:
class getUserDetails(APIView):
    permission_classes = [ permissions.IsAdminUser ]


    

    def post(self,request,format=None):
        data = request.data
        print(data)
        user = CustomUser.objects.filter(id=data['id']).first()
        if user:
            info = PersonalInfo.objects.filter(user = user).first()
            if info:
                resp = {}
                # getting documents
                ticket = DocumentTicket.objects.filter(user = user,reviewed=True).first()
                if ticket:
                    auth_docs = []
                    docs = Documents.objects.filter(ticket = ticket)
                    for doc in docs:
                        auth_docs.append(base + doc.file.url)
                else:
                    auth_docs = []
                
                resp['auth_docs'] = auth_docs

                
                resp['user'] = RegisterSerializer(user).data
                resp['info'] = PersonalInfoSerializer(info).data
                return Response(resp)
            else:
                return Response({"failed":True,"reason" : "no Info for User"},status.HTTP_400_BAD_REQUEST) 
        else:
            return Response({"failed":True,"reason" : "no User found"},status.HTTP_400_BAD_REQUEST) 


class modifyInfo(APIView):
    permission_classes = [ permissions.IsAdminUser ]
    

    def post(self,request,format=None):
        data = request.data
        user = CustomUser.objects.filter(id=data['user']).first()
        info = PersonalInfo.objects.filter(user = user).first()
        
        s = PersonalInfoSerializer(info,data=data)
        
        if s.is_valid():
            print('valid')
            resp = s.save()
            print(resp)
            return Response(s.data, status= status.HTTP_202_ACCEPTED )
        else:
            print('not valid')
            return Response(s.errors, status=status.HTTP_400_BAD_REQUEST)


# Modify Fees 
class ModifyCoinFees(APIView):
    permission_classes = [ permissions.IsAdminUser ]
    def post(self,request,format=None):
        data = request.data
        coin = Coin.objects.filter(id=data['id']).first()
        if coin:
            if coin.token:
                n = coin.network
                n.token_fee = data.get("n_fee",n.token_fee)
                n.save()
            s = CoinSerializer(coin,data=data)
            if s.is_valid():
                print('valid')
                resp = s.save()
                print(resp)
                return Response(s.data, status= status.HTTP_202_ACCEPTED )
            else:
                print('not valid')
                return Response(s.errors, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response("Coin Not Found", status=status.HTTP_400_BAD_REQUEST)
    


class GetUsers(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        users = CustomUser.objects.filter(is_superuser=False)
        resp = []
        for user in users:
            ticket = DocumentTicket.objects.filter(user = user,reviewed=True).first()
            if ticket:
                auth_docs = []
                docs = Documents.objects.filter(ticket = ticket)
                for doc in docs:
                    auth_docs.append(base + doc.file.url)
            else:
                auth_docs = []
            receipt_tickets = DepositTicket.objects.filter(user = user)
            receipts = []
            for receipt_t in receipt_tickets:
                docs = DepositDocs.objects.filter(ticket = receipt_t)
                for doc in docs:
                    receipts.append(base + doc.file.url)
            temp = RegisterSerializer(user).data
            bals = []
            balances = Balance.objects.filter(user= user)
            for bal in balances:
                if bal.coin.disabled or bal.coin.admin_disabled:
                    continue
                temps = BalanceSerializer(bal).data
                temps['image'] = bal.coin.image
                temps['symbol'] = bal.coin.symbol
                temps['decimals'] = bal.coin.decimals 
                bals.append(temps)
            temp['auth_docs'] = auth_docs
            temp['receipts'] = receipts
            temp['balances'] = bals
            resp.append(temp)


        #resp = RegisterSerializer(users,many=True).data
        return Response(resp)


# get tickets admin

class GetTickets(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        tickets = Tickets.objects.all().order_by('-date')
        resp = []
        for ticket in tickets:
            temp = SupportTicketsSerializer(ticket).data
            temp['user_data'] = RegisterSerializer(ticket.user).data
            resp.append(temp)
        return Response(resp)

    def post(self,request,format=None):
        data = request.data
        idd = data.get('id',False)
        if idd:
            try:
                ticket = Tickets.objects.filter(id=idd).first()
                if ticket:
                    resp = []
                    temp = SupportTicketsSerializer(ticket).data
                    temp['user_data'] = RegisterSerializer(ticket.user).data
                    resp.append(temp)
                    return Response({'success' : True, 'data' : resp})
                else:
                    return form_error_resp("Couldn't find ticket")
            except Exception as e:
                return form_error_resp("Ticket ID should be a number")
        else:
            return form_error_resp("Supply a correct ID")



class AnchorView(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        
        
        balance_resp = requests.get(api_url + "api/anchor/balance")
        balance_resp = balance_resp.json()
        if balance_resp.get("status",False):
            k_w = Worker()
            k_balance = k_w.ex.fetch_balance()
            resp = balance_resp.get("data",{})
            resp['k_balance'] = k_balance['total'].get("UST",0)
            print(resp)
            return Response({"success" : True, "data" : resp})
        else:
            return form_error_resp("Failed Fetching Anchor Data")
    def post(self,request,format=None):
        data = request.data 
        if data['action'] == 'unstake':
            Unstake.delay()
        elif data['action'] == 'stake':
            w = Worker()
            resp = w.withdraw()
            if resp:
                return form_error_resp("Successfuly withdrawn from Kraken",failed=False)
            else:
                return form_error_resp("failed withdraw from kraken")
        return form_error_resp("Started",failed=False)


# get Transactions

class TransactionAdmView(APIView):
    permission_classes = [ permissions.IsAdminUser ]


    def get(self,request,*args,**kwargs):
        user = request.user
        transactions = Transactions.objects.all().order_by("-date")
        data = TransactionsSerializer(transactions,many=True).data
        for d in data:
            coin = Coin.objects.filter(id=d['coin']).first()
            if coin:
                d['coinData'] = CoinSerializer(coin).data
            else:
                d['coinData'] = False
            
        return Response(data)


# enalbe / disable login / withdraw
class EnablerView(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def post(self,request,format=None):
        data = request.data
        u_id = data.get("user",False)
        if u_id :
            user = CustomUser.objects.filter(id=int(u_id)).first()
            if user:
                if data['action' ] == "deposit":
                    user.enable_login = data['status']
                elif data['action'] == 'withdraw':
                    user.enable_withdraw = data['status']
                user.save()
                return form_error_resp("Success" , failed=False)

            else:
                return form_error_resp("User Not Found")
                
        else:
            return form_error_resp("No User ID supplied")

class CoinDisabler(APIView):
    permission_classes = [ permissions.IsAdminUser ]


    def get(self,request,format=None):
        coins = Coin.objects.filter(disabled=False)
        resp = []
        for coin in coins:
            temp = CoinSerializer(coin).data
            network_fee = 0
            if coin.token:
                network_fee = coin.network.token_fee
            temp['network_fee'] = network_fee
            resp.append(temp)

        #resp = CoinSerializer(coins,many=True).data
        return Response(resp)

    def post(self,request,format=None):
        data = request.data
        c_id = data.get("coin",False)
        if c_id :
            coin = Coin.objects.filter(id=int(c_id)).first()
            if coin:
                coin.admin_disabled = data.get('disabled',False)
                coin.save()
                return form_error_resp("Success" , failed=False)

            else:
                return form_error_resp("Coin Not Found")
                
        else:
            return form_error_resp("No Coin ID supplied")

class EarnAdmin(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        reqs = UserRequests.objects.filter(r_type__in=["stake","unstake"],closed=False).order_by('-date')
        resp = []
        for req in reqs:
            temp = UserRequestsSerializer(req).data
            temp['user'] = RegisterSerializer(req.transaction.user).data
            temp['coin'] = CoinSerializer(req.coin).data
            temp['t_id'] = req.transaction.idd
            resp.append(temp)

        return Response(resp)

    def post(self,request,format=None):
        data = request.data
        idd = data['id']
        status = data['status']
        reason = data['reason']
        r_type = data['action']
        if r_type in ['stake','unstake']:
            u_r = UserRequests.objects.filter(r_type=r_type,id=idd,closed=False).first()
            if u_r:
                tr = u_r.transaction
                if status:
                    r_bal = u_r.amount * (10**u_r.coin.decimals)
                    bal = Balance.objects.filter(user = u_r.transaction.user,coin=u_r.coin).first()
                    print(bal.balance)
                    print(r_bal)
                    if bal:
                        if r_type == 'stake':
                            if bal.balance >= r_bal:
                                bal.balance -= r_bal
                                bal.earn += r_bal
                                bal.save()
                                u_r.closed = True
                                u_r.save()
                                tr.status = "completed"
                                tr.save()
                                return form_error_resp("Approved Stake request",failed=False)
                            else:
                                return form_error_resp("User doesn't have enough balance")
                        else:
                            if bal.earn >= r_bal:
                                bal.earn -= r_bal
                                bal.balance += r_bal
                                bal.save()
                                u_r.closed = True
                                u_r.save()
                                tr.status = "completed"
                                tr.save()
                                return form_error_resp("Approved Unstake request",failed=False)
                            else:
                                return form_error_resp("User doesn't have enough staked balance")

                    else:
                        return form_error_resp("Could not retrieve user balance")
                else:
                    tr.status = "rejected"
                    tr.reason = reason
                    tr.save()
                    u_r.closed = True
                    u_r.save()
                    return form_error_resp("Request Rejected with reason : {0}".format(reason),failed=False)
            else:
                return form_error_resp("Request Not found or already closed")
        else:
            return form_error_resp("Action not recognized")



class WithdrawAdmin(APIView):
    permission_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        reqs = UserRequests.objects.filter(r_type="withdraw",closed=False).order_by('-date')
        resp = []
        for req in reqs:
            temp = UserRequestsSerializer(req).data
            if req.bank_details:
                temp['bank_details'] = BankDetailsSerializer(req.bank_details).data
            else:
                temp['address'] = req.address
            
            temp['user'] = RegisterSerializer(req.transaction.user).data
            temp['coin'] = CoinSerializer(req.coin).data
            temp['t_id'] = req.transaction.idd
            resp.append(temp)

        return Response(resp)

    def post(self,request,format=None):
        data = request.data
        idd = data['id']
        status = data['status']
        reason = data['reason']
        
        tag = data['tag']
        if True:
            u_r = UserRequests.objects.filter(r_type="withdraw",id=idd,closed=False).first()
            amount = u_r.amount + u_r.transaction.coin.kraken_fee
            if u_r:
                tr = u_r.transaction
                if status:
                    r_bal = amount * (10**u_r.coin.decimals)
                    bal = Balance.objects.filter(user = u_r.transaction.user,coin=u_r.coin).first()
                    print(bal.balance)
                    print(r_bal)
                    if bal:
                        
                        if bal.balance >= r_bal:
                            try:
                                w = Worker()
                                params = {
                                    'key': tag,
                                }
                                w = w.ex.withdraw(bal.coin.symbol.upper(),str(amount),w.add,None,params)
                                print(w)
                                trade_id = w.get("id",False)
                                if trade_id:
                                    print("success Withdraw")
                                    bal.balance -= r_bal
                                    bal.save()
                                    u_r.closed = True
                                    u_r.save()
                                    tr.status = "completed"
                                    tr.save()
                                    return form_error_resp("Successful Withdraw",failed=False)
                                else:
                                    return form_error_resp("failed withdraw")
                            except Exception as e:
                                print(str(e))
                                return form_error_resp("failed withdraw")
                            
                        else:
                            return form_error_resp("User doesn't have enough balance")
                        

                    else:
                        return form_error_resp("Could not retrieve user balance")
                else:
                    tr.status = "rejected"
                    tr.reason = reason
                    tr.save()
                    u_r.closed = True
                    u_r.save()
                    return form_error_resp("Request Rejected with reason : {0}".format(reason),failed=False)
            else:
                return form_error_resp("Request Not found or already closed")
        else:
            return form_error_resp("Action not recognized")
