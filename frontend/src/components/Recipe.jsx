import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../pages/CSS.css"
// // import "../pages/Recipe.css"

const BACKEND_URL = import.meta.env.BACKEND_URL;

export function Recipe(props) {
    const [recipe, setRecipe] = useState("")
    return (
        <div className="recipe-card">
            <div key={props.recipe._id}>

                <div className="grid-container-recipe">
                    {/*recipe-title*/}
                    <h2><Link 
                        className="recipe-title-link" 
                        to={`myrecipes/${props.recipe.title}`}>
                    </Link></h2>
                </div>
            </div>

        </div>
    );
    }
