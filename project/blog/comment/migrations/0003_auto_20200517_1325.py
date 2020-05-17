# Generated by Django 3.0.6 on 2020-05-17 13:25

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0002_auto_20200517_0448'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='body',
            field=models.TextField(validators=[django.core.validators.MinValueValidator(32), django.core.validators.RegexValidator(regex='^(?=.*[0-9]$)(?=.*[a-zA-Z])')]),
        ),
    ]
