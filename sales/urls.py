from django.urls import path
from sales import views

urlpatterns = [
    path('sales/', views.SaleList.as_view()),
    path('sales/<int:pk>/', views.SaleDetail.as_view()),
]