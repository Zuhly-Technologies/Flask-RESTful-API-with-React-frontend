# Flask-RESTful-API-with-React-frontend
A RESTful API using flask, restful, sqlalchemy, marshmallow with SQLLite database. The API provides endpoints to manage products. You can perform CRUD operations (Create, Read, Update, Delete) using these endpoints.

## Installation
1. Clone the repository: git clone "repository-url"<br>
2. Create a virtual environment: python3 -m venv venv<br>
3. Enable the virtual environment: source venv/bin/activate<br>
4. Install the required packages: pip install -r requirements.txt<br>
5. Create the database tables by running create_db.py.<br>
6. Start the Flask development server: python main.py<br>
7. The API will be accessible at http://127.0.0.1:5000.<br>

## Endpoints
### GET
Retrieve a row by its ID: http://127.0.0.1:5000/product/int:id<br>
Retrieve all rows: http://127.0.0.1:5000/product<br>
### POST
Add a row: http://127.0.0.1:5000/product<br>
### PATCH
Edit a row using its ID: http://127.0.0.1:5000/product/int:id<br>
### DELETE
Delete a row using its ID: http://127.0.0.1:5000/product/int:id<br>

## Testing
The API comes with a testing suite using the pytest framework. The tests are located in the Pytest folder.<br> 

Run the tests as follows:

1. Ensure the Flask server is running.
2. Run the tests in the terminal: pytest

The tests will validate the functionality of the API endpoints.

# Frontend
![table](https://github.com/omrfrq/Flask-RESTful-API-with-React-frontend/assets/87365154/0111f1d0-c1f7-4769-9f5b-3bd0366c4576)

<br>The React frontend is designed to provide a user-friendly interface for managing products stored in the Flask API's database. It includes features to add, edit, and delete product entries.

## Prerequisites
- node.js version 14 (you can use nvm to install node)
- create-react-app and npm (or yarn)
- In your package.json file add: "proxy":"http://localhost:5000"

## Setup
After creating your react app and making the necassary changes to the code:<br>

1. Ensure the Flask API is running.
2. Inside the frontend directory to start the development server: npm start (or yarn start)
3. The frontend will be accessible at http://localhost:3000.

