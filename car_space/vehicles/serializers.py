from rest_framework import serializers
from vehicles.models import Vehicle

# Vehicle Serializer
class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'