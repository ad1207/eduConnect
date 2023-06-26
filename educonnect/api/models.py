import uuid
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Course(models.Model):
    course_code=models.CharField(max_length=10)
    course_name=models.CharField(max_length=100)
    course_component=models.CharField(max_length=100)
    course_lookup=models.CharField(max_length=200)
    def __str__(self):
        return self.course_code

class Module(models.Model):
    course=models.ForeignKey(Course,related_name="modules",on_delete=models.CASCADE)
    module_name=models.CharField(max_length=100)
    module_no=models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(1)])
    topics=models.CharField(max_length=500)
    links=models.TextField(null=False)
    notes=models.TextField(null=False)

    def __str__(self):
        return self.module_name

