from flask import Blueprint, jsonify, request
from repositories.users_repo import UserRepository
from db.db_connection import AsyncDatabaseConnection

#Create a Blueprint for a user-related route
user_routes = Blueprint('user_routes', __name__)

#set up asynchronous database conection
db_connection = AsyncDatabaseConnection()

#create user repository with connection to database
repository = UserRepository(db_connection)

@user_routes.route('/users', methods=['GET'])
async def get_users():
    #try/execpt block for error handling
    try:
        #asycn call get_all_users() function on repository
        #this will return a list of User objects
        users = await repository.get_all_users()
        # trun User objects into JSON
        return jsonify([user.to_dict() for user in users])
    except Exception as e:
        #if error getting users return 500 staus with error message (JSON format)
        return jsonify({"error": str(e),}), 500