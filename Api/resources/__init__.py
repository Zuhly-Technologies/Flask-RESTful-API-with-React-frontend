from resources.endpoints import ProductResource, ProductPostResource

def add_resource(api):
    api.add_resource(ProductResource, "/product/<int:id>")
    api.add_resource(ProductPostResource, "/product")