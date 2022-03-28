from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .serializer import RegisterSerializer,DocumentSerializer
# Create your views here.

from .models import *


class TestSession(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self,request,format=None):
        user = request.user
        if (user.is_superuser):
            url_path = "/adpanel/dashboard"
            super_user = True
        else:
            url_path = "/userpanel/dashboard"
            super_user = False
            
        print(f'User is {user}')
        u = RegisterSerializer(user).data
        #u['path'] = url_path
        u['s'] = super_user
        return Response(u)


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
                return Response({'result':'not created'})
        else:
            return Response({'failed':True,'message':"Email Used"},status.HTTP_401_UNAUTHORIZED)


# upload functionality

class Upload(APIView):
    permissions_classes = [permissions.IsAuthenticated]


    def get(self, request, *args, **kwargs):
        user = request.user
        docs = Documents.objects.filter(user=user)
        serializer = DocumentSerializer(docs, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        user = request.user
        Doc_serializer = DocumentSerializer(data=request.data)
        if Doc_serializer.is_valid():
            resp = Doc_serializer.save()
            return Response(resp, status=status.HTTP_201_CREATED)
        else:
            print('error', Doc_serializer.errors)
            return Response(Doc_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

