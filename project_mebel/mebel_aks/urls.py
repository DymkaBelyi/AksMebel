from django.urls import path
from . views import AksViewSet, AksUpdateViewSet, RegisterView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns =[
    path('aks_mebel/', AksViewSet.as_view()),
    path('aks_mebel/<int:pk>', AksUpdateViewSet.as_view()),  # Создаем новую views для update
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', TokenObtainPairView.as_view(), name="login"),
    path('logout/', LogoutView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
]