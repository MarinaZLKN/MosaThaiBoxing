# Generated by Django 4.2.8 on 2024-02-09 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0005_remove_contact_phone_number_contact_company_name_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="SentEmail",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("email", models.EmailField(max_length=254)),
                ("sent_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name="contact",
            name="account_number",
            field=models.CharField(
                blank=True,
                max_length=20,
                null=True,
                unique=True,
                verbose_name="Account number",
            ),
        ),
        migrations.AlterField(
            model_name="contact",
            name="address",
            field=models.CharField(
                blank=True, max_length=255, null=True, verbose_name="Company address"
            ),
        ),
        migrations.AlterField(
            model_name="contact",
            name="company_name",
            field=models.CharField(
                max_length=100, null=True, verbose_name="Company name"
            ),
        ),
        migrations.AlterField(
            model_name="contact",
            name="phone_number1",
            field=models.CharField(
                blank=True, max_length=15, null=True, verbose_name="Phone number 1"
            ),
        ),
        migrations.AlterField(
            model_name="contact",
            name="phone_number2",
            field=models.CharField(
                blank=True, max_length=15, null=True, verbose_name="Phone number 2"
            ),
        ),
        migrations.AlterField(
            model_name="feedback",
            name="email",
            field=models.EmailField(
                blank=True, max_length=300, null=True, unique=True, verbose_name="email"
            ),
        ),
        migrations.AlterField(
            model_name="feedback", name="text", field=models.TextField(max_length=1024),
        ),
    ]
