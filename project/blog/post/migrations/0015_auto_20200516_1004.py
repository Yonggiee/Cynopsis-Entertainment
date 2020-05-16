# Generated by Django 3.0.6 on 2020-05-16 10:04

from django.db import migrations, models
import post.validators


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0014_auto_20200516_1004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=200, unique=True, validators=[post.validators.validate_symbol]),
        ),
    ]