from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .serializer import RegisterSerializer,DocumentSerializer,PersonalInfoSerializer,TicketSerializer
from .tasks import test,createCustomer,verify

# Create your views here.

from .models import *


class TestSession(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        user = request.user
        if (user.is_superuser):
            url_path = "/adpanel/users"
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
            "verified" : verified
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
        base = "http://7033-105-69-194-58.ngrok.io"
        all_users_count =  CustomUser.objects.all().count()
        approved_count = CustomUser.objects.filter(is_validated=True).count()
        not_approved_count = all_users_count - approved_count
        tickets = []
        open_tickets = DocumentTicket.objects.filter(api_reviewed = True,reviewed=False)
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
            user.save()
            ticket.save()
        else:
            user.is_validated = False
            ticket.status = "refused"
            ticket.reviewed = True
            user.save()
            ticket.save()
        
        return Response({"done":True})
        

