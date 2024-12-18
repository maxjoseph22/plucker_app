import { Link } from "react-router-dom";
// import "../pages/CSS.css"

function BirdSighting(birdSighting, username) {
    return (
        <div className="birdSighting-card">
            <div className="grid-container-birdSighting">
                <h2>
                    <Link 
                    className="birdSighting-title-link"
                    to={`/sightings/${username}/${birdSighting.id}`}>
                    {/* {birdSighting.bird_name} */}
                    PLACEHOLDER TEXT (BIRD NAME)
                    </Link>
                </h2>
            </div>
        </div>
    );
    }

export default BirdSighting