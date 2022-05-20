
from ast import Add
from rest_framework.serializers import ModelSerializer
from .models import CustomUser, DepositDocs,Documents,PersonalInfo,DocumentTicket,Balance,Coin, Transactions,Tickets,Address

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','username','email','password','joined','has_personalInfo','is_validated','enable_login','enable_withdraw']
        extra_kwargs = {'password': {'write_only':True} , 'has_personalInfo' : {'read_only' : True},'is_validated' : {'read_only' : True}}

    def create(self,validated,*args,**kwargs):
        u = CustomUser.objects.create(username = validated['username'],email=validated['email'])
        u.set_password(validated['password'])
        u.save()

        return RegisterSerializer(u).data


class DocumentSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = "__all__"


    def create(self,validated,*args,**kwargs):
        #input(validated)
        d = Documents.objects.create(**validated)
        d.save()
        return DocumentSerializer(d).data


class DepositDocsSerializer(ModelSerializer):
    class Meta:
        model = DepositDocs
        fields = "__all__"

    def create(self,validated,*args,**kwargs):
        d = DepositDocs.objects.create(**validated)
        d.save()
        return DepositDocsSerializer(d).data


class TicketSerializer(ModelSerializer):

    class Meta:
        model = DocumentTicket
        fields = ['id','user','created','status','ticket_type','reviewed']


class PersonalInfoSerializer(ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = "__all__"



class BalanceSerializer(ModelSerializer):
    class Meta:
        model = Balance
        fields = ['id','coin','balance','credit']


class CoinSerializer(ModelSerializer):
    class Meta:
        model = Coin
        fields = "__all__"

class TransactionsSerializer(ModelSerializer):
    class Meta:
        model = Transactions
        fields = "__all__"


class SupportTicketsSerializer(ModelSerializer):
    class Meta:
        model = Tickets
        fields = "__all__"

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"
