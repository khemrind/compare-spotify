from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('session', views.session, name='session'),
    path('user', views.user, name='user'),
    path('compare', views.compare, name='compare'),
]