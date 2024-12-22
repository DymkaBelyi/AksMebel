from rest_framework import serializers
from .models import AksHomeMebel, CustomUser
from rest_framework_simplejwt.tokens import RefreshToken



# serializers берем данные из бд и трансформируем их в нужный нам формат
class AksSerializer(serializers.ModelSerializer):
    class Meta:
        model = AksHomeMebel
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # Используем CustomUser вместо User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = CustomUser  # Используем CustomUser вместо User
        fields = ('username', 'password', 'email', 'token')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(  # Используем CustomUser вместо User
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        refresh = RefreshToken.for_user(user)
        user.token = str(refresh.access_token)
        return user


