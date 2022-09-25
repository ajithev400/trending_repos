
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/',include('account.urls')),
   path('api-auth/', include('rest_framework.urls')),
   path('api-auth/', include('drf_social_oauth2.urls',namespace='drf')),#???? namespace='drf' is mandatory

]
