class User:
    def __init__(self, id, username, email, password, profile_picture):
        self.id = id
        self.username = username
        self.email = email
        self.password = password
        self.profile_picture = 'uploads/default_photo.webp'


    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "profile_picture": self.profile_picture
            }

    # These need to be within the User class - took me agaes to realise it...
    def __repr__(self):
        return f"User({self.id}, {self.username}, {self.email}, {self.password}, {self.profile_picture})" #, {self.profile_picture})"

    def __eq__(self, other):
        return self.__dict__ == other.__dict__