# Generated by Django 4.2.8 on 2024-01-22 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0003_schedule"),
    ]

    operations = [
        migrations.AlterField(
            model_name="price", name="amount", field=models.IntegerField(),
        ),
    ]
