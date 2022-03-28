from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.



class CustomUser(AbstractUser):
    email = models.EmailField(default='',null=True)
    joined = models.DateTimeField(auto_now_add=True)
    is_validated = models.BooleanField(default=False)
    submited_docs = models.BooleanField(default=False)



    def __str__(self):
        return self.username




class Documents(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    doc_type = models.CharField(max_length=255)
    file = models.ImageField(upload_to="documents")

    def __str__(self):
        return self.user.username
