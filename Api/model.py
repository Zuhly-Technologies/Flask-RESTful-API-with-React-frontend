from initialize import db, ma

class Product(db.Model):
    __tablename__ = 'product'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = True)
    created_at = db.Column(db.DateTime, nullable = True)
    status = db.Column(db.String(10), nullable = True)
    description = db.Column(db.String(200))
    price = db.Column(db.Float)
    qty = db.Column(db.Integer)


    def __repr__(self):
        return f"Product(name = {self.name}, created_at = {self.created_at}, status= {self.status}, description={self.description},price={self.price}, qty={self.qty})"


class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Product
        load_instance = True

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

