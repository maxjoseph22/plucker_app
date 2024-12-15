from lib.models.ingredients import Ingredient

"""
Ingredient constructs
"""
def test_ingredients_constructs():
    user = Ingredient(1, 1, 'Potatoes')
    assert user.id == 1
    assert user.recipe_id == 1
    assert user.ingredient_name == "Potatoes"

"""
We can format users to strings nicely
"""
def test_ingredient_format_nicely():
    ingredients = Ingredient(1, 1, 'Potatoes')
    assert str(ingredients) == 'Ingredient(1, 1, Potatoes)'


"""
We can compare two identical users
And have them be equal
"""
def test_ingredients_are_equal():
    Ingredients1 = Ingredient(1, 1, 'Potatoes')
    Ingredients2 = Ingredient(1, 1, 'Potatoes')
    assert Ingredients1 == Ingredients2