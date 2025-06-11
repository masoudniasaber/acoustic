from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('fixings.urls')),
    path('docs/', include('apidocs.urls')),  # ✅ Add this line
    path('auth/', include('authuser.urls')),  # Your auth system lives here

]

