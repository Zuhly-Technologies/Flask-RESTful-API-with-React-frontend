import requests

ENDPOINT = "http://127.0.0.1:5000"


def test_get_endpoint(): 

    payload={
        "name": "POSTED",
        "created_at": "2023-08-07T12:34:56",
        "status": "active",
        "description": "This is a dummy description.",
        "price": 19.99,
        "qty": 50
    }

    post_response = requests.post(ENDPOINT+"/product", json=payload )

    data=post_response.json()
    productId=data['id']

    get_response = requests.get(ENDPOINT+"/product/"+str(productId))
    assert get_response.status_code == 200

#supposed to fail
def test_get_endpoint_missing_entry(): 
    response = requests.get(ENDPOINT+"/product/100")
    assert response.status_code == 404