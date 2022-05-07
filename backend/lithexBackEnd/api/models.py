from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.



class CustomUser(AbstractUser):
    email = models.EmailField(default='',null=True)
    joined = models.DateTimeField(auto_now_add=True)
    is_validated = models.BooleanField(default=False)
    #submited_docs = models.BooleanField(default=False)
    has_personalInfo = models.BooleanField(default=False)
    enable_login = models.BooleanField(default=True)
    enable_withdraw = models.BooleanField(default=True)
    cus_id = models.CharField(max_length=255,default="")



    def __str__(self):
        return self.username

class PersonalInfo(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    postal = models.CharField(max_length=255)
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

    



class Address(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    public = models.CharField(max_length=255,default="")
    private = models.CharField(max_length=255,default="")
    address = models.CharField(max_length=255,default="")
    network = models.CharField(max_length=100,default="")
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address


class Coin(models.Model):
    name = models.CharField(max_length=100)
    symbol = models.CharField(max_length=100)
    interest = models.FloatField(default=0)
    image = models.CharField(max_length=255)
    api_id = models.CharField(max_length=255)
    decimals = models.IntegerField(default=18)
    disabled = models.BooleanField(default=False)
    admin_disabled = models.BooleanField(default=False)
    usd_value = models.FloatField(default=0)
    d_fee = models.FloatField(default=0)
    e_fee = models.FloatField(default=0)
    w_fee = models.FloatField(default=0)

    def __str__(self):
        return self.name + " (" + self.symbol + ")"


class Transactions(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    coin = models.ForeignKey(Coin,on_delete=models.CASCADE)
    t_type = models.CharField(max_length=255) # deposit | withdraw | exchange
    message = models.CharField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.message

class Tickets(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    obj = models.CharField(max_length=255,default="")
    email = models.EmailField()
    message = models.CharField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username



class Balance(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    coin = models.ForeignKey(Coin,on_delete=models.CASCADE)
    address = models.ForeignKey(Address,on_delete=models.CASCADE)
    balance = models.FloatField(default=0)
    old_balance = models.FloatField(default=0)
    credit = models.FloatField(default=0)

    def __str__(self):
        return self.user.username + " [" + self.coin.symbol + "] : "+ str(self.balance)
 

class DepositTicket(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.username


class DepositDocs(models.Model):
    ticket = models.ForeignKey(DepositTicket,on_delete=models.CASCADE)
    coin = models.ForeignKey(Coin,on_delete=models.CASCADE)
    file = models.ImageField(upload_to="deposits")

    def __str__(self):
        return self.ticket.user.username



class DocumentTicket(models.Model):
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    # open | refused | approved
    status = models.CharField(max_length=255)
    reason = models.CharField(max_length=255,default="")
    ticket_type = models.CharField(max_length=255)
    reviewed = models.BooleanField(default=False)
    api_reviewed = models.BooleanField(default=False)
    api_status = models.CharField(default="",max_length=255)
    score = models.FloatField(default=0)
    match = models.BooleanField(default=False)
    document_id = models.CharField(max_length=255,default="")

    def __str__(self):
        return self.user.username + " " + self.ticket_type




class Documents(models.Model):
    ticket = models.ForeignKey(DocumentTicket,on_delete=models.CASCADE)
    doc_type = models.CharField(max_length=255)
    file = models.ImageField(upload_to="documents")

    def __str__(self):
        return self.ticket.user.username



class WithdrawSettings(models.Model):
    ust_label = models.CharField(max_length=255,default="")
    disable_ust_withdrawals = models.BooleanField(default=True)
    disable_ust_sweep = models.BooleanField(default=True)

    def __str__(self):
        return self.ust_label