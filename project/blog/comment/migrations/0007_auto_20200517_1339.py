# Generated by Django 3.0.6 on 2020-05-17 13:39

import comment.validators
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0006_auto_20200517_1331'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='body',
            field=models.TextField(validators=[django.core.validators.MinLengthValidator(32), comment.validators.validate_one_alphanum]),
        ),
    ]
