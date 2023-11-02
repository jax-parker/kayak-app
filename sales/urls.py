from django.urls import path
from sales import views

urlpatterns = [
    path('sales/', views.SalesList.as_view()),
    path('sales/<int:pk>/', views.SalesDetail.as_view()),
]