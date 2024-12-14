from lib.models.ingredients import Ingredient

class IngredientRepository():
    def __init__(self, connection):
        self._connection = connection