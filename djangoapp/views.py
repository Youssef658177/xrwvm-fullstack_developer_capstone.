from django.http import JsonResponse
from .restapis import get_request, post_request
import json

def login_user(request):
    # كود تسجيل الدخول
    return JsonResponse({"status": "Authenticated"})

def get_dealerships(request, state="All"):
    endpoint = "/fetchDealers" if state == "All" else f"/fetchDealers/{state}"
    dealerships = get_request(endpoint)
    return JsonResponse({"status": 200, "dealers": dealerships})

def get_dealer_reviews(request, dealer_id):
    endpoint = f"/fetchReviews/dealer/{dealer_id}"
    reviews = get_request(endpoint)
    # إضافة تحليل المشاعر لكل مراجعة هنا
    return JsonResponse({"status": 200, "reviews": reviews})
