# Generated by Django 3.2.12 on 2022-05-07 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0027_withdrawsettings_disable_ust_sweep'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='enable_login',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='enable_withdraw',
            field=models.BooleanField(default=True),
        ),
    ]
