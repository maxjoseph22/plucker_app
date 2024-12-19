import { Navbar } from "../components/Navbar"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { DisplaySingleRecipe } from "../components/DisplaySingleRecipe";
import { BirdImageDisplay } from "../components/BirdImageDisplay";
import { getSighting } from "../services/sightings";



export function RecipeDisplayPage() {
    const [filepath, setFilepath] = useState();
    const { username, sighting_id } = useParams();

    useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("this is the sighting id on line 16 -->",sighting_id)
    getSighting({token, sighting_id})
        .then((data) => {
            console.log("this is the data on line 19 -->", data)
        setFilepath(data.image)
        })    
    })
    

    // console.log("here is the sighting on line 11 -->",sighting)
    // // const sightingFilePath = sighting.image

    
    return (
        <>
        <Navbar />
        <div style={{ paddingTop: '46px', paddingLeft: '46px', paddingRight: '46px' }}>
        <h1>Recipe for {username} </h1>
        {!!filepath && (<BirdImageDisplay filepath={filepath} />)}
        <DisplaySingleRecipe username={username} sighting_id={sighting_id} />
        </div>
        </>
    )
}