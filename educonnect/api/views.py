
# Create your views here.

from .models import Course,Module
from .serializers import CourseSerializer,ModuleSerializer,CourseModuleSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import generics,permissions
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes

## Class Based Views
class CourseSearchAPIView(viewsets.ModelViewSet):
    queryset = Course.objects.all()[:10]
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        qs = Course.objects.all()
        search_param = self.request.query_params.get("search")
        if search_param is not None:
            qs = qs.filter(course_lookup__contains=search_param)
        return qs[:10]


# Create your views here.
class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ModuleList(generics.ListAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CourseModule(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseModuleSerializer
    lookup_field = 'pk'



## Function Based Views
@api_view(['GET'])
def get_routes(request):
    routes = [
        "api/courses/",
        "api/courses/search/",
        "api/courses/id/",
    ]
    return Response(routes)