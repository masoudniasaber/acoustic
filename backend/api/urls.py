# backend/api/urls.py (your root urls.py)
from django.contrib import admin
from django.urls import path, include
from fixings.api import api  # 👈 no alias now

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🖼 HTML views
    path('', include('home.urls')),
    path('', include('fixings.urls', namespace='fixings')),

    # 🧩 APIs (clean separation)
    path('api/v1/', api.urls),  # 👈 using `api` directly

    # Auth, Docs, etc.
    path('auth/', include('authuser.urls')),
]
