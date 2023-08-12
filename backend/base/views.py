from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
from .data import data

@api_view(['GET'])
def getRoutes(request):
    routes = ['/api/home']
    return Response(routes)

@api_view(['GET'])
def getData(request):
    return Response(data)

@api_view(['GET'])
def getShare(request,SYMBOL):
    share = None
    for i in data:
        if i['SYMBOL'] == SYMBOL:
            share = i
            break
    return Response(share)

