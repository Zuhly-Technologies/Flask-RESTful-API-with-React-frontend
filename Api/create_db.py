from main import app
from initialize import db

if __name__ == "__main__":
    with app.app_context():
        print ("Creating database tables...")
        db.create_all()
        print ("Done!")