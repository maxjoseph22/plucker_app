import pytest
from lib.models.recipes import Recipe
from lib.repositories.recipes_repo import RecipeRepository
# from lib.db.db_connection import AsyncDatabaseConnection

@pytest.mark.asyncio
async def test_get_all_recipes(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql') 
    # Instantiate the repository and call the method
    repository = RecipeRepository(db_connection)
    result = await repository.get_all_recipes()
    # Define the expected result based on the seed data
    expected_result = [
        Recipe(1, 'Blue Jay Roast',
               'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper', 
               'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.', 
               '2024-12-01', 5, 45, 1),
        Recipe(2, 'Cardinal Casserole', 
               'Northern Cardinal meat, potatoes, cream, cheese, onions', 
               'Layer potatoes, cream, and Cardinal meat in a casserole dish, bake for 60 minutes.', 
               '2024-12-02', 4, 60, 1),
        Recipe(3, 'Robin Stew', 
               'American Robin meat, carrots, celery, potatoes, broth, thyme', 
               'Simmer Robin meat with vegetables and broth for a hearty stew.', 
               '2024-12-03', 5, 90, 2),
        Recipe(4, 'Mourning Dove Pie', 
               'Mourning Dove meat, pie crust, gravy, peas, carrots', 
               'Fill a pie crust with Dove meat and vegetables, then bake until golden brown.', 
               '2024-12-04', 3, 50, 2),
        Recipe(5, 'Chickadee Skewers', 
               'Black-capped Chickadee meat, bell peppers, onions, barbecue sauce', 
               'Thread Chickadee meat and veggies onto skewers, grill with barbecue sauce.', 
               '2024-12-05', 4, 30, 3),
        Recipe(6, 'Woodpecker Stir Fry', 
               'Downy Woodpecker meat, soy sauce, garlic, ginger, mixed vegetables', 
               'Stir fry Woodpecker meat and veggies with soy sauce and spices.', 
               '2024-12-06', 5, 20, 3),
        Recipe(7, 'Finch Fricassée', 
               'House Finch meat, butter, cream, white wine, mushrooms', 
               'Cook Finch meat in a creamy wine sauce with mushrooms.', 
               '2024-12-07', 4, 35, 4),
        Recipe(8, 'Starling Soup', 
               'European Starling meat, onions, garlic, tomatoes, basil', 
               'Slow-cook Starling meat with tomatoes and spices for a rich soup.', 
               '2024-12-08', 3, 120, 4),
        Recipe(9, 'Sparrow Curry', 
               'White-throated Sparrow meat, curry spices, coconut milk, rice', 
               'Simmer Sparrow meat in a spiced coconut milk curry, serve with rice.', 
               '2024-12-09', 4, 40, 5),
        Recipe(10, 'Goldfinch Tagine', 
               'American Goldfinch meat, apricots, almonds, honey, spices', 
               'Cook Goldfinch meat in a tagine with dried fruits and honey.', 
               '2024-12-10', 5, 75, 5),
    ]
    # Assert that the result matches the expected result
    assert result == expected_result
@pytest.mark.asyncio
async def test_get_single_recipe(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository and call the method for a single recipe
    repository = RecipeRepository(db_connection)
    result = await repository.get_single_recipe(1)
    # Define the expected result for recipe with ID 1
    expected_result = Recipe(1, 'Blue Jay Roast', 
                              'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper', 
                              'Marinate Blue Jay meat in olive oil and spices, then roast at 375°F for 45 minutes.', 
                              '2024-12-01', 5, 45, 1)
    # Assert that the result matches the expected result
    assert result == expected_result
@pytest.mark.asyncio
async def test_create_new_recipe(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Create a new recipe
    new_recipe = Recipe(None, 'Pigeon Pie', 'Pigeon meat, crust, gravy', 'Combine and bake', '2024-12-11', 4, 60, 1)
    result = await repository.create_recipe(new_recipe)
    # Retrieve all recipes to check if the new recipe was added
    recipes = await repository.get_all_recipes()
    # Check if the new recipe appears in the list
    assert len(recipes) == 11  # 10 existing recipes + 1 new one
    assert recipes[-1].title == 'Pigeon Pie'
@pytest.mark.asyncio
async def test_update_recipe_title(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Update the title of the recipe with ID 1
    await repository.update_recipe_title(1, 'Blue Jay Supreme')
    # Fetch the updated recipe
    updated_recipe = await repository.get_single_recipe(1)
    # Assert that the title has been updated
    assert updated_recipe.title == 'Blue Jay Supreme'
@pytest.mark.asyncio
async def test_delete_recipe(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Delete the recipe with ID 1
    await repository.delete_recipe(1)
    # Try to fetch the deleted recipe
    deleted_recipe = await repository.get_single_recipe(1)
    # Assert that the recipe no longer exists
    assert deleted_recipe is None
@pytest.mark.asyncio
async def test_update_recipe_ingredients(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Update the ingredients of the recipe with ID 1
    await repository.update_recipe_ingredients(1, 'Blue Jay meat, rosemary, garlic, olive oil, salt, pepper, lemon')
    # Fetch the updated recipe
    updated_recipe = await repository.get_single_recipe(1)
    # Assert that the ingredients have been updated
    assert 'lemon' in updated_recipe.ingredients
@pytest.mark.asyncio
async def test_update_recipe_description(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Update the description of the recipe with ID 1
    await repository.update_recipe_description(1, 'Marinate Blue Jay meat in olive oil, spices, and lemon, then roast at 375°F for 45 minutes.')
    # Fetch the updated recipe
    updated_recipe = await repository.get_single_recipe(1)
    # Assert that the description has been updated
    assert 'lemon' in updated_recipe.description
@pytest.mark.asyncio
async def test_update_recipe_date_created(db_connection):
    # Seed the database with the provided SQL file
    await db_connection.seed('lib/db/seeds/birdfood_app.sql')
    # Instantiate the repository
    repository = RecipeRepository(db_connection)
    # Update the date created of the recipe with ID 1
    await repository.update_recipe_date_created(1, '2024-12-12')
    # Fetch the updated recipe
    updated_recipe = await repository.get_single_recipe(1)
    # Assert that the date created has been updated
    assert updated_recipe.date_created == '2024-12-12'