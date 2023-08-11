from flask import Flask, make_response
from resources import *
from initialize import init
from flask_restful import Api
from flask_cors import CORS

app=Flask(__name__)

CORS(app)

@app.route('/model', methods=['OPTIONS'])
def handle_options():
    response = make_response()
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')
    response.headers.add('Access-Control-Allow-Methods', '*')
    return response

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' 
init(app)
api = Api(app)
add_resource(api)

if __name__ == "__main__":
    app.run()