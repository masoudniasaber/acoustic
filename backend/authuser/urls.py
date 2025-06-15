from django.urls import path, include

urlpatterns = [
    path('', include('djoser.urls')),         # Handles /users/, /users/me/, etc.
    path('', include('djoser.urls.jwt')),     # Handles /jwt/create/, /jwt/refresh/, etc.
]
