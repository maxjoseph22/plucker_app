from lib.models.users import User

class UserRepository():
    def __init__(self, connection): #require database connection when UserRepository object is created
        self._connection = connection

    async def get_all_users(self):
        print(self._connection)
        print("get all users")
        rows = await self._connection.execute('SELECT * FROM users ORDER BY id')
        users = []
        for row in rows:
            user = User(row["id"], row["username"], row["email"], row["password"], row["profile_picture"])
            users.append(user)
        return users


    async def get_single_user_by_id(self, id):
        rows = await self._connection.execute(
            'SELECT * FROM users WHERE id = $1', [id])
        row = rows[0]
        return User(row["id"], row["username"], row["email"], row["password"], row["profile_picture"])

    async def get_single_user_by_email(self, email):
        rows = await self._connection.execute(
            'SELECT * FROM users WHERE email = $1', [email])
        row = rows[0]
        return User(row["id"], row["username"], row["email"], row["password"], row["profile_picture"])


    async def get_single_user_by_username(self, username):
        rows = await self._connection.execute(
            'SELECT * FROM users WHERE username = $1', [username])
        row = rows[0]
        return User(row["id"], row["username"], row["email"], row["password"], row["profile_picture"])


    async def create_user(self, user):
        # This validation might be handles in the schema files later (not sure yet)
        if not user.username:
            return 'Please provide a username'
        if not user.email:
            return 'Please provide an email address'
        if not user.password:
            return 'Please provide a password'
        
        # This ony adds a profile picture url to the database if one is provided (otherwise the database defaults it)
        if not user.profile_picture:
            await self._connection.execute(
                'INSERT INTO users (username, email, password, profile_picture) VALUES ($1, $2, $3)',
                [user.username, user.email, user.password])
        else:
            await self._connection.execute(
                'INSERT INTO users (username, email, password, profile_picture) VALUES ($1, $2, $3, $4)',
                [user.username, user.email, user.password, user.profile_picture])
        return None

    async def update_user_password(self, id, password):
        await self._connection.execute(
            'UPDATE users SET password = $1 WHERE id = $2', 
            [password, id])
        return None

    async def update_user_email(self, id, email):
        await self._connection.execute(
            'UPDATE users SET email = $1 WHERE id = $2', 
            [email, id])
        return None

    async def update_user_username(self, id, username):
        await self._connection.execute(
            'UPDATE users SET username = $1 WHERE id = $2', 
            [username, id])
        return None

    async def delete_user(self, id):
        await self._connection.execute(
            'DELETE FROM users WHERE id = $1',
            [id]
        )
        return None
    
    async def validate_user(self, username, password):
        valid_users = await self._connection.execute('SELECT * FROM users WHERE username = $1 AND user_password = $2', [username, password])
        return len(valid_users) > 0
