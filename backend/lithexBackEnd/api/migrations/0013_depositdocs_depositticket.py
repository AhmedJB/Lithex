# Generated by Django 3.2.12 on 2022-04-09 00:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20220408_2313'),
    ]

    operations = [
        migrations.CreateModel(
            name='DepositTicket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DepositDocs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(upload_to='deposits')),
                ('coin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.coin')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.depositticket')),
            ],
        ),
    ]
