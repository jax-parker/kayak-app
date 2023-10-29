from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    ''' Post model related to 'owner and set default image'''

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    launchsite_name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    what3words = models.CharField(max_length=255)
    comments = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_post_mhjm11', blank=True
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.id}{self.launchsite_name}"

