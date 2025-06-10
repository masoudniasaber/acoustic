from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ScrewCalculator(APIView):
    def post(self, request):
        weight = request.data.get("weight")
        element_type = request.data.get("type")

        result = f"Suggested screws for {weight}kg {element_type}"

        return Response({"screws": result}, status=status.HTTP_200_OK)
