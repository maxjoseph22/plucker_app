from models.users import User

class UserRepository():
    def __init__(self, connection): #require database connection when UserRepository object is created
        self._connection = connection

    async def get_all_users(self):
        rows = await self._connection.execute('SELECT * FROM users ORDER BY id')
        users = []
        for row in rows:
            user = User(row["id"], row["username"], row["email"], row["password"])
            users.append(user)
        return users

#Commended out while updating db connection code
    # def get_single_user(self, user_id):
    #     pass

    # def create_user(self, user):
    #     pass

    # def update_user_password(self, user, password):
    #     pass

    # def update_user_email(self, user, email):
    #     pass

    # def update_user_username(self, user, username):
    #     pass

    # def delete_user(self, user_id):
    #     pass



    