class User:
    def __init__(self, id, username, email, password, profile_picture):
        self.id = id
        self.username = username
        self.email = email
        self.password = password
        self.profile_picture = profile_picture


    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "profile_picture": self.profile_picture,
            # password not included to avoid exposing the password hash in the response!!
            }

    # These need to be within the User class - took me agaes to realise it...
    def __repr__(self):
        return f"User({self.id}, {self.username}, {self.email}, {self.password})"

    def __eq__(self, other):
        return self.__dict__ == other.__dict__