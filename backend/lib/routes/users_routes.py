from flask import Blueprint, jsonify, g
from lib.repositories.repo_factory import connect_to_user_repository #import custom connect_to_user_repository() function from repo_factory.py file
from lib.repositories.users_repo

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
        # trun User objects into JSON
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
        user = await g.user_repository.get_single_user(id)
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e),}), 500

# create user route --> signup

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


