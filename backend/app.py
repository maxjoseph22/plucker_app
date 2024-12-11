import os
from flask import Flask
from flask_cors import CORS
from plucker_app.backend.routes.users_routes import user_routes

# Create a new Flask app
app = Flask(__name__)
CORS(app)

# route blueprints 
app.register_blueprint(user_routes)

if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 8000)))
