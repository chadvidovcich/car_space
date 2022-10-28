from vehicles.models import Vehicle
from rest_framework import viewsets, permissions
from .serializers import VehicleSerializer

# Vehicle Viewset
class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VehicleSerializer