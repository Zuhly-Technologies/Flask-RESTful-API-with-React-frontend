import requests

ENDPOINT = "http://127.0.0.1:5000"


def test_get_endpoint(): 
    response = requests.get(ENDPOINT+"/product/2")
    assert response.status_code == 200

#supposed to fail
def test_get_endpoint_missing_entry(): 
    response = requests.get(ENDPOINT+"/product/100")
    assert response.status_code == 200