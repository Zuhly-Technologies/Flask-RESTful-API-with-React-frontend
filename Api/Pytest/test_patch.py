import requests

ENDPOINT = "http://127.0.0.1:5000"

def test_patch_endpoint():

    post_payload={
        "name": "POSTED",
        "created_at": "2023-08-07T12:34:56",
        "status": "active",
        "description": "This is a dummy description.",
        "price": 19.99,
        "qty": 50
    }

    post_response = requests.post(ENDPOINT+"/product", json=post_payload )
    data=post_response.json()
    productId=data['id']

    patch_payload={
        "name": "PATCHED",
        "created_at": "2023-08-07T12:34:56",
        "status": "active",
        "description": "This is a dummy description.",
        "price": 19.99,
        "qty": 50
    }
 
    response = requests.patch(ENDPOINT+"/product/"+str(productId), json=patch_payload )
    assert response.status_code == 200