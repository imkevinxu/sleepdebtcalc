from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin
from django import forms

import datetime
import os

class Base(models.Model):
    created_at  = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now_add=True, auto_now=True)

    class Meta:
        abstract = True

class Sleeper(Base):
    username = models.CharField(blank=True, null=True, max_length=255)
    hours = models.IntegerField(blank=True, null=True)

    def __unicode__(self):
        return u'Sleeper: %s' % (self.username)