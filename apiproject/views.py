from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import NoteSerializer
from .models import Note


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    # .order_by('note')
    serializer_class = NoteSerializer