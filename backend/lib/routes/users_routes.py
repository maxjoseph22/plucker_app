from flask import Blueprint, jsonify, g, request
from lib.models.users import User
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity)
from lib.repositories.repo_factory import connect_to_user_repository #import custom connect_to_user_repository() function from repo_factory.py file
from werkzeug.security import generate_password_hash


#Create a Blueprint for a user-related route
user_routes = Blueprint('user_routes', __name__)

# get all users route
@user_routes.route('/users', methods=['GET'])
# define route handler function below route decorator
async def get_users():
    #try/execpt block for error handling
    try:
        # connect to global user repository using connect_to_user_repository() function
        await connect_to_user_repository()
        users = await g.user_repository.get_all_users()
        # turn User objects into JSON
        return jsonify([user.to_dict() for user in users])
    except Exception as e:
        print(f"Error: {e}")
        #if error getting users return 500 staus with error message (JSON format)
        return jsonify({"error": str(e),}), 500
    
# Add additional routes below

# get user by id
@user_routes.route('/users/<id>', methods=['GET'])
async def get_user_by_id(id):
    try:
        await connect_to_user_repository()
        user = await g.user_repository.get_single_user_by_id(id)
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e),}), 500

# get user by username
@user_routes.route('/users/<username>', methods=['GET'])
async def get_user_by_username(username):
    try:
        await connect_to_user_repository()
        user = await g.user_repository.get_single_user_by_username(username)
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e),}), 500

# create user route --> signup
@user_routes.route('/users/signup', methods=['POST'])
async def create_user():
    try:
        request_data = request.get_json()
        await connect_to_user_repository()
        username = request_data.username
        email = request_data.email
        password = request_data.password
        profile_picture = request_data.profile_picture
        
        if not username or not email or not password:
            return jsonify({"success": False, "message": "Missing required fields"}), 400

        # Verificar si el usuario ya existe (por email)
        existing_user = await g.user_repository.find_user_by_email(email)
        if existing_user:
            return jsonify({"success": False, "message": "Email already registered"}), 409

        # Hashear la contraseña
        hashed_password = generate_password_hash(password)
        
        user = User(None, username, email, hashed_password, profile_picture)
        
        await g.user_repository.create_user(user)
        return jsonify({"success": True, "message": "Signup successful"}), 200
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e),}), 500
    

# login route
@user_routes.route('/users/login', methods=['POST'])
async def login_user():
    await connect_to_user_repository()
    email = request.form['email']
    password = request.form['password']
    user_validated = await g.user_repository.validate_user(email, password)
    
    if user_validated == True:
        session['authenticated'] = True
        session['username'] = username
        
        return jsonify({"success": True, "message": "Login successful"}), 200
    else:
        return jsonify({"success": False, "message": "Incorrect username or password"}), 401

# profile route 


