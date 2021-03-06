from autoslug import AutoSlugField
from django.db import models
from django.core.validators import MaxValueValidator, RegexValidator
from django.urls import reverse

from .validators import validate_symbol

class Post(models.Model):
    user = models.CharField(max_length=255)  ## use id instead
    title = models.CharField(max_length=200, unique=True,
        validators=[validate_symbol]
    )
    desc = models.TextField()
    date_created = models.DateField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    is_trashed = models.BooleanField(default=False)
    slug = AutoSlugField(populate_from='title', always_update=True, unique=True, null=True)
    number_of_comments = models.IntegerField(default=0,
        validators=[MaxValueValidator(50)])  ## not needed, validate during insertion instead

    def get_absolute_url(self):
        return reverse('detailed', kwargs={'slug': self.slug})


# /?getparamname=value
# user
# title
# date_from
# date_to
# are empty parameters, they shouldn't be there without any value as it just pollutes
# created_at
# updated_at
