class Recipe:

    def __init__(self, id, title, date_created, recipe_rating, cooking_time, bird_sighting_id):
        self.id = id
        self.title = title
        self.date_created = date_created
        self.recipe_rating= recipe_rating
        self.cooking_time = cooking_time
        self.bird_sighting_id = bird_sighting_id

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "date_created": self.date_created,
            "recipe_rating": self.recipe_rating,
            "cooking_time": self.cooking_time,
            "bird_sighting_id": self.bird_sighting_id
            }
    
    def __repr__(self):
        return f"Recipe({self.id}, {self.title}, {self.date_created}, {self.recipe_rating}, {self.cooking_time}, {self.bird_sighting_id})"
    
    def __eq__(self, other):
        return self.__dict__ == other.__dict__












