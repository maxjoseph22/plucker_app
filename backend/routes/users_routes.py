from flask import Blueprint, jsonify, g
from repositories.repo_factory import connect_to_user_repository #import custom connect_to_user_repository() function from repo_factory.py file

#Create a Blueprint for a user-related route
user_routes = Blueprint('user_routes', __name__)


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

