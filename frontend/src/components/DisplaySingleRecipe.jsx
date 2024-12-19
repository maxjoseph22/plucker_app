import { fetchRecipe } from "../services/recipes";

import { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
export function DisplaySingleRecipe({sighting_id, username}) {
    const[recipeTitle, setRecipeTitle] = useState("");
    const[recipeCookingTime, setRecipeCookingTime] = useState("");
    const[recipeIngredients, setRecipeIngredients] = useState("");
    const[recipeSteps, setRecipeSteps] = useState("");

    

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetchRecipe({token, sighting_id})
        .then((data) => {
            console.log("this is the data on line 17 -->", data)
            setRecipeTitle(data.recipe.title);
            console.log(data.recipe.title)
            setRecipeCookingTime(data.recipe.cooking_time);
            setRecipeIngredients(data.recipe.ingredients);
            setRecipeSteps(data.recipe.steps);
            console.log(data.recipe.steps)
            // localStorage.setItem("token", data.token);
            })
            .catch((err) => {
                console.error("error from fecthRecipe in RecipeDisplayPage line 26 -->", err);
            });
        }, []);
    
    return (
        <>
        {recipeTitle && (
            <div>
                <h2>{recipeTitle}</h2>
                <p>Cooking Time: {recipeCookingTime} minutes</p>
                <h3>Ingredients:</h3>
                <ul>
                    {recipeIngredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.ingredient_name}
                    </li>
                ))}
                </ul>
                <h3>Steps:</h3>
                <ol>
                    {recipeSteps.map((step) => (
                    <li key={step.step_order}>
                        {step.step_description}
                    </li>
                ))}
                </ol>
            </div>
        )}
        </>
    )
}