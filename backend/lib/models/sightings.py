class Sighting:
    def __init__(self, id, bird_name, date_spotted, bird_recipe, bird_recipe_id):
        self.id = id
        self.bird_name = bird_name
        self.date_spotted = date_spotted
        self.bird_recipe = bird_recipe
        self.bird_recipe_id = bird_recipe_id


    def to_dict(self):
        return {
            "id": self.id,
            "bird_name": self.bird_name,
            "date_spotted": self.date_spotted,
            "bird_recipe": self.bird_recipe,
            "bird_recipe_id": self.bird_recipe_id,
            # password not included to avoid exposing the password hash in the response!!
            }

    # These need to be within the User class - took me agaes to realise it...
    def __repr__(self):
        return f"User({self.id}, {self.bird_name}, {self.date_spotted}, {self.bird_recipe}, {self.bird_recipe_id})"

    def __eq__(self, other):
        return self.__dict__ == other.__dict__;