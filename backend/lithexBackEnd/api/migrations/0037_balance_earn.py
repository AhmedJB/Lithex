# Generated by Django 3.2.12 on 2022-05-21 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_alter_coin_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='balance',
            name='earn',
            field=models.FloatField(default=0),
        ),
    ]
