from flask_restful import Resource
from flask import request,abort, Response
from marshmallow import fields, ValidationError
from initialize import ma,db
from model import Product, product_schema


class ProductResource(Resource):
    
    def get(self, id):
        product = Product.query.filter(Product.id == id).first()
        if not product:
            abort(404, description="Could not find that id")
        return product_schema.dump(product),200

    
    def put(self, id):
        product = Product.query.filter(Product.id == id).first()
        if product:
            abort(404, description="Id already exists, cannot add")
        try:
            product = product_schema.load(request.get_json(), partial=True)
            product.id = id
        except ValidationError as err:
            print(err.messages)
            abort(404, err.messages)
        db.session.add(product)
        db.session.commit()
        return product_schema.dump(product),201

    def patch(self, id):
        product = Product.query.filter(Product.id == id).first()
        if not product:
            abort(404, message = "Id does not exist, cannot modify")
        try:
            product_update = product_schema.load(request.get_json(), partial=True)
        except ValidationError as err:
            abort(404, err.messages)
        if product_update.name:
            product.name = product_update.name
        if product_update.created_at:
            product.created_at = product_update.created_at
        if product_update.status:
            product.status = product_update.status
        if product_update.description:
            product.description = product_update.description
        if product_update.price:
            product.price = product_update.price
        if product_update.qty:
            product.qty = product_update.qty
        
        db.session.commit()
        return product_schema.dump(product),200
    
    def delete(self,id):
        product = Product.query.filter(Product.id == id).first()
        if not product:
            abort(404, message = "id does not exist, cannot delete")
        db.session.delete(product)
        db.session.commit()
        return Response(status = 204)

    
class ProductPostResource(Resource):

    def post(self):
        try:
            product = product_schema.load(request.get_json(), partial=True)
            print('loaded')
        except ValidationError as err:
            print(err.messages)
            abort(404,err.messages)

        db.session.add(product)
        db.session.commit()
        return product_schema.dump(product), 201
    
    def get(self):
        product = Product.query.all()
        return product_schema.dump(product, many=True),200