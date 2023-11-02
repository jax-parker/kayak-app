from django.db import models
from django.contrib.auth.models import User
from django_resized import ResizedImageField

CONDITION = (
    ("new", "New"),
    ("nearly_new", "Nearly New"),
    ("used", "Used"),
)


class Sales(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=100)
    condition = models.CharField(max_length=50, choices=CONDITION, default="new")
    description = models.CharField(max_length=10000, null=False, blank=False)
    price = models.FloatField()
    location = models.CharField(max_length=255)
    image = ResizedImageField(
        size=[400, None],
        quality=75,
        upload_to='images/',
        force_format="WEBP",
        default='../default_post_mhjm11',
        blank=False,
        null=False,
    )
        
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.id}{self.title}"
