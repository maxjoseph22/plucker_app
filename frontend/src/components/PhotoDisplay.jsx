const BACKEND_URL = import.meta.env.BACKEND_URL;
// import "../assets/App.css"

export function PhotoDisplay({ profile_picture }) {
    return (
        <div>
            <img 
            className="image" 
            src={`${BACKEND_URL}/${profile_picture}`} 
            width="300"></img>
        </div>
    );
}