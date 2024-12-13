from lib.models.recipes import Recipe
"""
Recipe constructs with an id, title, ingredients, description, date_created, recipe_rating, cooking_time, user_id
"""
def test_recipe_constructs():
    recipe = Recipe(1, 'Blue Jay Roast', 
    'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
    'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
    '2024-12-01',
    5,
    45,
    1
)
    assert recipe.id == 1
    assert recipe.title == 'Blue Jay Roast'
    assert recipe.ingredients == 'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper'
    assert recipe.description == 'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.'
    assert recipe.date_created == '2024-12-01'
    assert recipe.recipe_rating == 5
    assert recipe.cooking_time == 45
    assert recipe.user_id == 1
"""
We can format recipes to strings nicely
"""
def test_recipe_formats_nicely():
    recipe = Recipe(1, 'Blue Jay Roast', 
    'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
    'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
    '2024-12-01',
    5,
    45,
    1
    )
    assert str(recipe) == "Recipe(1, Blue Jay Roast, Blue Jay meat, rosemary, garlic, olive oil, salt, pepper, Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes., 2024-12-01, 5, 45, 1)"
    
"""
We can compare two identical users
And have them be equal
"""
def test_recipes_are_equal():
    recipe1 = Recipe(1, 'Blue Jay Roast', 
    'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
    'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
    '2024-12-01',
    5,
    45,
    1
    )
    recipe2 = Recipe(1, 'Blue Jay Roast', 
    'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
    'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
    '2024-12-01',
    5,
    45,
    1
    )
    assert recipe1 == recipe2
    
    def test_recipe_to_dict():
        recipe = Recipe(
        1, 
        'Blue Jay Roast', 
        'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
        'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
        '2024-12-01',
        5,
        45,
        1
    )
        expected_dict = {
        "id": 1,
        "title": 'Blue Jay Roast',
        "ingredients": 'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper',
        "description": 'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.',
        "date_created": '2024-12-01',
        "recipe_rating": 5,
        "cooking_time": 45,
        "user_id": 1
    }
        assert recipe.to_dict() == expected_dict