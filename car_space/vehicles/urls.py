from rest_framework import routers
from .api import VehicleViewSet

router = routers.DefaultRouter()
router.register('api/vehicles', VehicleViewSet, 'vehicles')

urlpatterns = router.urls