from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import Course,Module

# Register your models here.
admin.site.register(Module)

@admin.register(Course)
class CourseAdmin(ImportExportModelAdmin):
    pass