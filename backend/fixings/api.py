# fixings/api.py
from ninja import NinjaAPI, Schema

api = NinjaAPI()

class ScrewRequest(Schema):
    weight: float
    type: str

@api.post("/calculate")
def calculate_screws(request, data: ScrewRequest):
    result = f"Suggested screws for {data.weight}kg {data.type}"
    return {"screws": result}
