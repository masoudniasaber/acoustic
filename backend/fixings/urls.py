from django.urls import path
from .views import ScrewCalculator

urlpatterns = [
    path('calculate/', ScrewCalculator.as_view()),
]
