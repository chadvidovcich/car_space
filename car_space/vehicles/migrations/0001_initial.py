# Generated by Django 4.1.2 on 2022-10-28 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('year', models.CharField(max_length=4)),
                ('image', models.ImageField(blank=True, upload_to='uploads/% d/% m/% Y/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
