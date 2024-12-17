// import { NavBar } from "../../components/NavBar";
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
// import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
import { DisplayMyRecipes } from "../components/DisplayMyRecipes";
// import { getRecipesForUser } from "../services/recipes";

import { UploadImage } from "../components/UploadBirdImage";

import { useNavigate } from "react-router-dom";



export function MyProfile() {
    const [username, setUsername] = useState("");
    const [user_id, setUserId] = useState("");
    const [profile_picture, setProfilePicture] = useState("Test");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
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
        <div className="profile-padding">
            <div className="nav-bar">
                {/* <NavBar /> */}
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="post-card">
                        <PhotoDisplay profile_picture={profile_picture}/>
                        <h3>{username}</h3>
                    </div>
                </div>
                <br></br>
                <div className="grid-item">
                    <div>
                        <h1>Profile Page</h1>
                        <UploadImage token={token} />
                    </div>
                </div>
                <div>
                <DisplayMyRecipes user_id={user_id} />
                </div>
            </div>
        </div>
        </>
    );
}