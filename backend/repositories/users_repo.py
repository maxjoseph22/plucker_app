from models.users import User

class UserRepository():
    def __init__(self, connection): #require database connection when UserRepository object is created
        self._connection = connection

    