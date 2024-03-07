from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import VideoViewSet
from .views import VideoUploadView

router = DefaultRouter()
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('upload/', VideoUploadView.as_view(), name='file-upload'),
]
