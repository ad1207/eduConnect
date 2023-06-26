from rest_framework import serializers
from .models import Course,Module


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ['id','module_name','module_no','topics','links','notes']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id','course_code','course_name','course_component','course_lookup']

class CourseModuleSerializer(serializers.ModelSerializer):
    modules = ModuleSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = ['id', 'course_code', 'course_name', 'modules']