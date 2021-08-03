from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('session', views.session, name='session'),
    path('verify', views.verify, name='verify'),
    path('data', views.data, name='data'),
]