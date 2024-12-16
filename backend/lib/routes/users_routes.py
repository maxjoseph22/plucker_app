from flask import Blueprint, jsonify, g
from flask_jwt_extended import (
    JWTManager, create_access_token, jwt_required, get_jwt_identity
)
from lib.repositories.repo_factory import connect_to_user_repository #import custom connect_to_user_repository() function from repo_factory.py file

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
        await connect_to_user_repository()
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        profile_picture = request.form['profile_picture']
        user = User(None, username, email, password, profile_picture)
        
        await g.user_repository.create_user(user)
        # return redirect (f"/login")
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e),}), 500
    

# login route
@user_routes.route('/login', methods=['POST'])
async def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Validate credentials
    user = g.user_repository.get_single_user_by_username(username)
    if user and user['password'] == password:
        # Generate a JWT token
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Invalid username or password"}), 401

# profile route 


