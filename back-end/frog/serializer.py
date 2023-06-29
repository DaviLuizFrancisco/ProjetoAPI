from rest_framework import serializers
from frog.models import Login

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('id', 'username', 'password',)