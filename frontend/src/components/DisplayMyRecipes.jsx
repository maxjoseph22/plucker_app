import Recipe from "./Recipe"
import getMyRecipes from "../services/"


export function DisplayMyRecipes({ recipes, handleReloadRecipes }) {
    

    return (
        <div className="recipe-list" role="recipe-list">
            {recipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe._id} handleReloadRecipes={handleReloadRecipes}/>
            ))}
        </div>
    );
}
