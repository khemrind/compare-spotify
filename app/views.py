from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpRequest
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def handle(request: HttpRequest):

    received_count = request.GET.get('count')

    data = {
        'text': f"e{received_count}"
    }

    print()

    return JsonResponse(data)