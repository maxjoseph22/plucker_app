import os
from flask import Flask
from flask_cors import CORS
from lib.routes.users_routes import user_routes #import all user routes 
from dotenv import load_dotenv
import os

load_dotenv()

BACKEND_URL = os.getenv("BACKEND_URL")
SECRET_KEY = os.getenv("SECRET_KEY")


# Create a new Flask app
app = Flask(__name__)
CORS(app)

# register route blueprints 
app.register_blueprint(user_routes)

if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 8000)))
