from django.urls import path
from .views import fixings

app_name = 'fixings'

urlpatterns = [
    path('fixings/', fixings, name='fixings'),
]
