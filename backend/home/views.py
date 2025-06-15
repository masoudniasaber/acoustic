from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponseRedirect, HttpResponse


def home(request):
    # Rendering the home.html file in the home directory.
    return render(request, 'home/home.html')