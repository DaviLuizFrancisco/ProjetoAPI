from django.contrib import admin
from frog.models import Login

class Logins(admin.ModelAdmin):
    list_display = ('username', 'password')
    list_display_links = ('username', 'password')
    search_fields = ('username',)

admin.site.register(Login, Logins)