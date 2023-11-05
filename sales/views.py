from rest_framework import generics, permissions, filters
# from rest_framework.response import Response
from kayak_api.permissions import IsOwnerOrReadOnly
from .models import Sales
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import SalesSerializer


class SaleList(generics.ListCreateAPIView):
    ''' List sales or create sale if logged in'''

    serializer_class = SalesSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Sales.objects.annotate().order_by('created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'owner__followed__owner__profile',
        'owner__profile',
        ]
    search_fields = [
        'owner__username',
        'title',
    ]

    def perform_create(self, serializer):
        self.object = serializer.save(owner=self.request.user)


class SaleDetail(generics.RetrieveUpdateDestroyAPIView):
    ''' Retrieve a saleand edit or delete if owned'''
    serializer_class = SalesSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Sales.objects.annotate().order_by('created_at')
