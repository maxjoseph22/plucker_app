import { useState, useEffect } from "react";
import BirdSighting from "./BirdSighting"
import { getMyBirdSightings } from "../services/sightings"


export function DisplayMyBirdSightings({user_id, username}) {
    const [birdSightings, setBirdSightings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!user_id) return;

        const fetchBirdSightings = async () => {
            try {
                const token = localStorage.getItem("token");
                const data = await getMyBirdSightings(token)
                setBirdSightings(data)
            } catch (err) {
                console.error(
                    "Failed to fetch recipes DisplayMyRecipes.jsx Component - line 20:", err);
                setError(err.message);
            }
            
        };
        fetchBirdSightings();
    }, [user_id])
        
    if (error) return <p>Error: {error}</p>
    if (!birdSightings.length) return <p>No recipes found.</p>

    return (
        <div className="sightings-list" role="sightings-list">
            {birdSightings.map((birdSighting) => (
                <BirdSighting birdSighting={birdSighting} key={birdSighting._id} username={username}/>
            ))}
        </div>
    );
}
