# Generated by Django 4.0.3 on 2022-03-27 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_documents'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_validated',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='customuser',
            name='submited_docs',
            field=models.BooleanField(default=False),
        ),
    ]
