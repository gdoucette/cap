# Generated by Django 2.0.1 on 2018-02-12 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timer', '0002_auto_20180212_2236'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timer',
            name='duration',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
