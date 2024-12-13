class Recipe:

    def __init__(self, id, title, ingredients, description, date_created, recipe_rating, cooking_time, user_id):
        self.id = id
        self.title = title
        self.ingredients = ingredients
        self.description = description
        self.date_created = date_created
        self.recipe_rating= recipe_rating
        self.cooking_time = cooking_time
        self.user_id = user_id

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "ingredients": self.ingredients,
            "description": self.description,
            "date_created": self.date_created,
            "recipe_rating": self.recipe_rating,
            "cooking_time": self.cooking_time,
            "user_id": self.user_id
            }
    
    def __repr__(self):
        return f"Recipe({self.id}, {self.title}, {self.ingredients}, {self.description}, {self.date_created}, {self.recipe_rating}, {self.cooking_time}, {self.user_id})"
    
    def __eq__(self, other):
        return self.__dict__ == other.__dict__












