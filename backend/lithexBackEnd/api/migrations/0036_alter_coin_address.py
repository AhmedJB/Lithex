# Generated by Django 3.2.12 on 2022-05-21 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_alter_coin_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coin',
            name='address',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
    ]
