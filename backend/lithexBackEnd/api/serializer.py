
from rest_framework.serializers import ModelSerializer
from .models import CustomUser,Documents

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','username','email','password','joined']
        extra_kwargs = {'password': {'write_only':True}}

    def create(self,validated,*args,**kwargs):
        u = CustomUser.objects.create(username = validated['username'],email=validated['email'])
        u.set_password(validated['password'])
        u.save()

        return RegisterSerializer(u).data


class DocumentSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = "__all__"
        extra_kwards = {'user' : {'required': False}}


    def create(self,validated,*args,**kwargs):
        input(validated)
        d = Documents.objects.create(**validated)
        d.save()
        return DocumentSerializer(d).data

