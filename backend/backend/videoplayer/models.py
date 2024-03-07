from django.db import models


# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    file_path = models.FileField(upload_to='videos/')  # Pfad, wo die Videodateien gespeichert werden

    def __str__(self):
        return self.title