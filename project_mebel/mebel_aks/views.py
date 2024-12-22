from django_filters import rest_framework as rest_filters
from .models import AksHomeMebel, CustomUser
from .serializers import AksSerializer, RegisterSerializer
from rest_framework.response import Response
from rest_framework import generics, permissions
from rest_framework import filters
from rest_framework_simplejwt.tokens import RefreshToken


class AksViewSet(generics.ListCreateAPIView):
    queryset = AksHomeMebel.objects.all()
    serializer_class = AksSerializer
    filter_backends = [rest_filters.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filter_fields = ['category', 'price', 'name']
    search_fields = ['category']

class AksUpdateViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = AksHomeMebel.objects.all()
    serializer_class = AksSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

class LogoutView(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=205)
        except Exception as e:
            return Response(status=400)

