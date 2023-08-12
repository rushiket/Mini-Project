from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('data/',views.getData,name="data"),
    path('data/<str:SYMBOL>',views.getShare,name="share"),
]