# Generated by Django 3.2.12 on 2022-05-07 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_auto_20220507_1054'),
    ]

    operations = [
        migrations.AddField(
            model_name='coin',
            name='admin_disabled',
            field=models.BooleanField(default=False),
        ),
    ]