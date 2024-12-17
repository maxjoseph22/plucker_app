// import { NavBar } from "../../components/NavBar";
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
import { DisplayMyRecipes } from "../components/DisplayMyRecipes";
// import { getRecipesForUser } from "../services/recipes";
import { useNavigate } from "react-router-dom";


export function MyProfile() {
    const [username, setUsername] = useState("");
    const [user_id, setUserId] = useState("");
    const [profile_picture, setProfilePicture] = useState("Test");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found - myProfile.jsx line 20; redirect to login");
            navigate("/login");
            return;
        }
        // getUserInfo(token)
        // .then((data) => {
        setUsername(`${token.username}`);
        setProfilePicture(token.profile_picture);
        setUserId(token.id)
            // localStorage.setItem("token", data.token);
            })

        , [];

    return (
        <>
        {/* <NavBar /> */}
        <div className="profile-padding">
        <div className="grid-container">
            <div className="grid-item">
                <div className="post-card">
            <PhotoDisplay profile_picture={profile_picture}/>
            <h3>{username}</h3>
            <DisplayMyRecipes user_id={user_id} />
            </div>
            <br></br>
            </div>
            <div className="grid-item">
            </div>
        </div>
        </div>
        </>
    );
}