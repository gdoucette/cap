from django.db import models
from django.contrib.auth.models import User


class Timer(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'timers')
    start_time = models.DateTimeField()
    duration = models.TimeField(blank=True, null=True)
    end_timer = models.DateTimeField(blank=True, null=True)


class StrainedFocus(models.Model):
    timer = models.ForeignKey('Timer', on_delete= models.CASCADE, related_name='strained_focus')
    time_stamp = models.DateTimeField()




# # Create your models here.


 



