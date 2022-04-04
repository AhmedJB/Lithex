
from rest_framework.serializers import ModelSerializer
from .models import CustomUser,Documents,PersonalInfo,DocumentTicket

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','username','email','password','joined','has_personalInfo']
        extra_kwargs = {'password': {'write_only':True} , 'has_personalInfo' : {'read_only' : True}}

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


class TicketSerializer(ModelSerializer):

    class Meta:
        model = DocumentTicket
        fields = ['id','user','created','status','ticket_type','reviewed']


class PersonalInfoSerializer(ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = "__all__"

