# Generated by Django 3.2.5 on 2021-08-10 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='storedsession',
            name='id',
            field=models.CharField(max_length=32, primary_key=True, serialize=False),
        ),
    ]
