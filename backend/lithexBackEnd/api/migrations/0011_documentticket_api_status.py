# Generated by Django 3.1.3 on 2022-04-05 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20220405_1840'),
    ]

    operations = [
        migrations.AddField(
            model_name='documentticket',
            name='api_status',
            field=models.CharField(default='', max_length=255),
        ),
    ]
