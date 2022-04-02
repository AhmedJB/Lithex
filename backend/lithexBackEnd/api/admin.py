from django.contrib import admin
from .models import CustomUser,Documents,PersonalInfo,DocumentTicket

# Register your models here.


admin.site.register(CustomUser)

admin.site.register(Documents)

admin.site.register(PersonalInfo)

admin.site.register(DocumentTicket)