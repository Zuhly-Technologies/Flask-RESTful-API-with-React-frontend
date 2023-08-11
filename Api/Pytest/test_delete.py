import requests

ENDPOINT = "http://127.0.0.1:5000"


def test_get_endpoint(): 
    response = requests.delete(ENDPOINT+"/product/8")
    assert response.status_code == 204