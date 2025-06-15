# fixings/views.py
from django.shortcuts import render

def fixings(request):
    return render(request, 'fixings/fixings.html')
