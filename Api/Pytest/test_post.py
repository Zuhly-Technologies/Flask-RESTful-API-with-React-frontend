import requests

ENDPOINT = "http://127.0.0.1:5000"

def test_post_endpoint():
    payload={
        "name": "POSTED",
        "created_at": "2023-08-07T12:34:56",
        "status": "active",
        "description": "This is a dummy description.",
        "price": 19.99,
        "qty": 50
    }
 
    response = requests.post(ENDPOINT+"/product", json=payload )
    assert response.status_code == 201

