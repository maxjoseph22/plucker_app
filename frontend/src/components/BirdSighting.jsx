import { Link } from "react-router-dom";
import { BirdImageDisplay } from "../components/BirdImageDisplay"
// import "../pages/CSS.css"

function BirdSighting({birdSighting, username}) {
    const birdImageFilepath = birdSighting.image
    const dateSpotted = birdSighting.date_spotted
    const locationSpotted = birdSighting.location
    console.log(birdImageFilepath)
    return (
        <div className="birdSighting-card">
            <div className="grid-container-birdSighting">
                <h2>
                    
                    <BirdImageDisplay filepath={birdImageFilepath}/>
                    <h5>Location Spotted: {locationSpotted}</h5>
                    <h5>Date Spotted: {dateSpotted}</h5>
                    <Link 
                    className="birdSighting-title-link"
                    to={`/sightings/${username}/${birdSighting.id}`}>
                    {birdSighting.bird_name}
                    </Link>
                </h2>
            </div>
        </div>
    );
    }

export default BirdSighting