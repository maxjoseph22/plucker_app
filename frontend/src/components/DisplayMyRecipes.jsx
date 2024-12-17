import { useState, useEffect } from "react";
import Recipe from "./Recipe"
import getMyRecipes from "../services/recipes"


export function DisplayMyRecipes({user_id}) {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!user_id) return;

        const fetchRecipes = async () => {
            try {
                const token = localStorage.getItem("token");
                const data = await getMyRecipes(token)
                setRecipes(data)
            } catch (err) {
                console.error(
                    "Failed to fetch recipes DisplayMyRecipes.jsx Component - line 20:", err);
                setError(err.message);
            }
            
        };
        fetchRecipes();
    }, [user_id])
        
    if (error) return <p>Error: {error}</p>
    if (!recipes.length) return <p>No recipes found.</p>

    return (
        <div className="recipe-list" role="recipe-list">
            {recipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe._id}/>
            ))}
        </div>
    );
}
