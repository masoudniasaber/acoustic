from django.db import models


class Floor(models.Model):
    screw_type = models.CharField(max_length=20)  # e.g., VGS Ø11
    screw_length = models.PositiveIntegerField()  # e.g., 150
    angle = models.PositiveIntegerField()  # 0°, 15°, 30°, 45°
    capacity_perpendicular = models.PositiveIntegerField()
    capacity_milling = models.PositiveIntegerField()
    capacity_inclined = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.screw_type} {self.screw_length}mm @{self.angle}°"


class Wall(models.Model):
    screw_type = models.CharField(max_length=20)  # e.g., VGS Ø11
    screw_length = models.PositiveIntegerField()  # e.g., 150
    angle = models.PositiveIntegerField()  # 0°, 15°, 30°, 45°
    capacity_perpendicular = models.PositiveIntegerField()
    capacity_milling = models.PositiveIntegerField()
    capacity_inclined = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.screw_type} {self.screw_length}mm @{self.angle}°"


class Beam(models.Model):
    screw_type = models.CharField(max_length=20)  # e.g., VGS Ø11
    screw_length = models.PositiveIntegerField()  # e.g., 150
    angle = models.PositiveIntegerField()  # 0°, 15°, 30°, 45°
    capacity_perpendicular = models.PositiveIntegerField()
    capacity_milling = models.PositiveIntegerField()
    capacity_inclined = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.screw_type} {self.screw_length}mm @{self.angle}°"


from django.db import models

# Create your models here.
