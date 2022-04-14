from re import L
from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .serializer import DepositDocsSerializer, RegisterSerializer,DocumentSerializer,PersonalInfoSerializer,TicketSerializer,BalanceSerializer,CoinSerializer
from .tasks import test,createCustomer,verify

# Create your views here.

from .models import *


from .constants import base




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

class Register(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self,request,format=None):
        data = request.data
        print(data)
        o_u = CustomUser.objects.filter(email = data['username'])
        if len(o_u) == 0:
            s = RegisterSerializer(data=data)
            if s.is_valid():
                print('valid')
                resp = s.save()
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
    permissions_classes = [permissions.IsAuthenticated]


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


# deposit process

class BalanceView(APIView):
    permissions_classes = [permissions.IsAuthenticated]


    def get(self,request,*args,**kwargs):
        user = request.user
        balances = Balance.objects.filter(user= user)
        res = []
        for balance in balances:
            coin_data = CoinSerializer(balance.coin).data
            coin_data['balance'] = balance.balance
            coin_data['credit'] = balance.credit
            res.append(coin_data)
        
        return Response(res)


class handleDepositDocs(APIView):
    permissions_classes = [permissions.IsAuthenticated]

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
    permissions_classes = [permissions.IsAuthenticated]


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

    permissions_classes = [permissions.IsAuthenticated]


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
    permissions_classes = [ permissions.IsAdminUser ]



    def get(self,request,format=None):
        user = request.user
        print(user)
        
        all_users_count =  CustomUser.objects.all().count()
        approved_count = CustomUser.objects.filter(is_validated=True).count()
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
    permissions_classes = [ permissions.IsAdminUser ]


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

    permissions_classes = [ permissions.IsAdminUser ]

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

    permissions_classes = [ permissions.IsAdminUser ]

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
    permissions_classes = [ permissions.IsAdminUser ]


    

    def post(self,request,format=None):
        data = request.data
        print(data)
        user = CustomUser.objects.filter(id=data['id']).first()
        if user:
            info = PersonalInfo.objects.filter(user = user).first()
            if info:
                resp = {}
                # getting documents
                ticket = DocumentTicket.objects.filter(user = user,status="approved",reviewed=True).first()
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
    permissions_classes = [ permissions.IsAdminUser ]
    

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


class GetUsers(APIView):
    permissions_classes = [ permissions.IsAdminUser ]

    def get(self,request,format=None):
        users = CustomUser.objects.all()
        resp = RegisterSerializer(users,many=True).data
        return Response(resp)
