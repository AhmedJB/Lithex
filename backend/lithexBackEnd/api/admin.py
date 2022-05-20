from django.contrib import admin
from .models import CustomUser,Documents,PersonalInfo,DocumentTicket,Balance,DepositTicket,DepositDocs,Coin,Transactions,WithdrawSettings,Tickets,Networks

# Register your models here.


admin.site.register(CustomUser)

admin.site.register(Documents)

admin.site.register(PersonalInfo)

admin.site.register(DocumentTicket)

admin.site.register(Balance)

admin.site.register(DepositTicket)

admin.site.register(DepositDocs)

admin.site.register(Coin)

admin.site.register(Transactions)

admin.site.register(WithdrawSettings)

admin.site.register(Tickets)

admin.site.register(Networks)
