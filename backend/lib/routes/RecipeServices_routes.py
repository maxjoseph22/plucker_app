from flask import Blueprint, jsonify, g, request
from lib.services.RecipeServices import RecipeService
from lib.repositories.repo_factory import (
    connect_to_sightings_repository,
    connect_to_recipes_repository,
    connect_to_ingredients_repository,
    connect_to_steps_repository)

#Create a Blueprint for a user-related route
RecipeServices_routes = Blueprint('RecipeServices_routes', __name__)

#POST a bird sighting (and generate a recipe) route
@RecipeServices_routes('/bird_sighting', methods=["POST"])
async def post_bird_sighting():
    try:
        await connect_to_sightings_repository()
        await connect_to_recipes_repository()
        await connect_to_ingredients_repository()
        await connect_to_steps_repository()

        # Parse incoming JSON
        data = request.get_json()
        if not data:
            return jsonify({"error": "No JSON data provided"}), 400

        bird_name = data.get("bird_name")
        user_id = data.get("user_id")
        location = data.get("location")
        # I will need to add bird_image in here as well

        if not bird_name or not user_id:
            return jsonify({"error": "bird_name and user_id are required"}), 400

        # Create an instance of RecipeService with your repositories and connection
        recipe_service = RecipeService(
            sightings_repo=g.sightings_repository,
            recipes_repo=g.recipes_repository,
            ingredients_repo=g.ingredients_repository,
            steps_repo=g.steps_repository,
            connection=g.flask_database_connection
        )

        # Call the async service method to create a recipe
        recipe_id = await recipe_service.create_recipe_from_bird_name(bird_name, user_id, location)

        if not recipe_id:
            return jsonify({"error": "Failed to create recipe"}), 500

        # If successful, return the newly created recipe_id
        # DO they need the ID or can wer just send back a success message?
        return jsonify({"recipe_id": recipe_id}), 201

    except Exception as e:
        # Catch and return any unhandled exceptions
        return jsonify({"error": str(e)}), 500
    
#GET a bird recipe according to its sighting_id and send to frontend in json format
@RecipeServices_routes('/bird_recipe/<int: sighting_id>', methods=["GET"])
async def get_bird_recipe_by_sighting_id(sighting_id):
    try:
        await connect_to_sightings_repository()
        await connect_to_recipes_repository()
        await connect_to_ingredients_repository()
        await connect_to_steps_repository()

        recipe_service = RecipeService(
            sightings_repo=g.sightings_repository,
            recipes_repo=g.recipes_repository,
            ingredients_repo=g.ingredients_repository,
            steps_repo=g.steps_repository,
            connection=g.flask_database_connection
        )

        # Note from Doug --> recipe is a dictionary object
        recipe = await recipe_service.get_recipe_from_sighting_id(sighting_id)

        if not recipe:
            return jsonify({"error": "Recipe not found"}), 404

        return jsonify({"recipe": recipe}), 200

    except Exception as e:
            return jsonify({"error": str(e)}), 500
    
    #GET all bird recipes according to its sighting_id and send to frontend in json format
