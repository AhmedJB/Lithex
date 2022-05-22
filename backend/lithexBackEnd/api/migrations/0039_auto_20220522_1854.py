# Generated by Django 3.2.12 on 2022-05-22 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0038_auto_20220521_0730'),
    ]

    operations = [
        migrations.CreateModel(
            name='BankDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_name', models.CharField(default='', max_length=255)),
                ('bank_name', models.CharField(default='', max_length=255)),
                ('bank_code', models.CharField(default='', max_length=255)),
                ('transit_number', models.CharField(default='', max_length=255)),
                ('account_number', models.CharField(default='', max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='userrequests',
            name='bank_details',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.bankdetails'),
        ),
    ]
