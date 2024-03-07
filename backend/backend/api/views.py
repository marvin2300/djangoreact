from django.shortcuts import render
from rest_framework import viewsets
from videoplayer.models import Video
from .serializers import VideoSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


# Create your views here.
class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


@method_decorator(csrf_exempt, name='dispatch')
class VideoUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):

        print("POST Data:", request.data)
        print("POST Files:", request.FILES)

        video_serializer = VideoSerializer(data=request.data)

        if video_serializer.is_valid():
            video_serializer.save()
            return Response(video_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Serializer Errors:", video_serializer.errors)
            return Response(video_serializer.errors, status=status.HTTP_400_BAD_REQUEST)