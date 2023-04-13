from django.db import models
from slugify import slugify


class Category(models.Model):
    slug = models.SlugField(primary_key=True, max_length=80, blank=True)
    title = models.CharField(max_length=80, unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"