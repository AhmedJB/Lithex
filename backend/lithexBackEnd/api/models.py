from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.



class CustomUser(AbstractUser):
    email = models.EmailField(default='',null=True)
    joined = models.DateTimeField(auto_now_add=True)
    is_validated = models.BooleanField(default=False)
    #submited_docs = models.BooleanField(default=False)
    has_personalInfo = models.BooleanField(default=False)



    def __str__(self):
        return self.username


class DocumentTicket(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255)
    ticket_type = models.CharField(max_length=255)
    reviewed = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username + " " + self.ticket_type



class PersonalInfo(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal = models.IntegerField(default=0)
    country = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    business = models.CharField(max_length=255)
    employment = models.CharField(max_length=255)
    source = models.CharField(max_length=255)
    crypto_source = models.CharField(max_length=255)
    country_code =  models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)


    def __str__(self):
        return self.user.username





class Documents(models.Model):
    ticket = models.ForeignKey(DocumentTicket,on_delete=models.CASCADE)
    doc_type = models.CharField(max_length=255)
    file = models.ImageField(upload_to="documents")

    def __str__(self):
        return self.user.username
