# Generated by Django 3.2.5 on 2021-08-02 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StoredSession',
            fields=[
                ('id', models.CharField(max_length=43, primary_key=True, serialize=False)),
                ('properties', models.JSONField()),
                ('content', models.JSONField()),
                ('data', models.JSONField()),
            ],
            options={
                'db_table': 'stored_sessions',
            },
        ),
    ]
