from django.contrib import admin
from .models import CustomUser,Documents

# Register your models here.


admin.site.register(CustomUser)

admin.site.register(Documents)