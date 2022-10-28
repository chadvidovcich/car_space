from django.db import models

class Vehicle(models.Model):
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=4)
    image = models.ImageField(upload_to='uploads/% d/% m/% Y/',blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
