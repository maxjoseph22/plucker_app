import { Navbar } from "../components/Navbar"
import { useParams } from "react-router-dom";
import { DisplaySingleRecipe } from "../components/DisplaySingleRecipe";

export function RecipeDisplayPage() {
    const { username, sighting_id } = useParams();
    console.log("username taken from params on recipe display page --> ", username, sighting_id)
    
    return (
        <>
        <Navbar />
        <DisplaySingleRecipe username={username} sighting_id={sighting_id} />
        </>
    )
}