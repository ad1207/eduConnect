from django.urls import path
from . import views

urlpatterns =[
    path('courses/', views.CourseList.as_view()),
    path('courses/search/', views.CourseSearchAPIView.as_view({"get":"list"}), name='course_search'),
    path('courses/<int:pk>/', views.CourseModule.as_view()),

]