from db.db_connection import get_flask_database_connection
from flask import current_app, g
from repositories.users_repo import UserRepository


async def connect_to_user_repository():
        # check for existance of global user_repository 
        if not hasattr(g, "user_repository"):
            # if global user_repository does't exist create a database connection...
            db_connection = await get_flask_database_connection(current_app)
            # ...then create user_repository globally using the database connection.
            g.user_repository = UserRepository(db_connection)

        # METHOD 2 (not as useful)
        # db_connection = await get_flask_database_connection(current_app)
        # user_repository = UserRepository(db_connection)
        # users = await user_repository.get_all_users()