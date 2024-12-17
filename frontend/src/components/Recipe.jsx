import { Link } from "react-router-dom";
// import "../pages/CSS.css"

export function Recipe(recipe) {
    return (
        <div className="recipe-card">
            <div className="grid-container-recipe">
                {/*recipe-title*/}
                <h2>
                    <Link 
                    className="recipe-title-link" 
                    to={`myrecipes/${recipe.title}`}>
                    {recipe.title}
                    </Link>
                </h2>
            </div>


        </div>
    );
    }
