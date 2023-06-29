from django.contrib import admin
from django.urls import path, include
from frog.views import LoginViewSet, login_view
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'logins', LoginViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('logins/', login_view, name='login'),
]