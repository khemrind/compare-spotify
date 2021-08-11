from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('session', views.session, name='session'),
    path('data', views.data, name='data'),
    path('func', views.func, name='func'),
]
