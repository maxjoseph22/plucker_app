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
    // const [username, setUsername] = useState("");
    // const [user_id, setUserId] = useState("");
    // const [profile_picture, setProfilePicture] = useState("Test");
    const token = localStorage.getItem("token");
    const current_user_string = localStorage.getItem("currentUser")
    const current_user = JSON.parse(current_user_string)
    // const username = current_user.username
    // const profile_picture = current_user.username
    const navigate = useNavigate();

    console.log("current user line 26 ---> ", current_user)

    useEffect(() => {
        if (!token) {
            console.error("No token found - myProfile.jsx line 30; redirect to login");
            navigate("/login");
            return;
        }
        

        // getUserInfo(token)
        // .then((data) => {
        // setUsername(current_user.username);
        // setProfilePicture(current_user.profile_picture);
        // setUserId(current_user.id)
            // localStorage.setItem("token", data.token);
            }

        , [] );

    return (
        <>
        {/* <NavBar /> */}
        <h1>Profile Page</h1>
        <div className="profile-padding">
        <div className="grid-container">
            <div className="grid-item">
                <div className="post-card">
            <PhotoDisplay profile_picture={current_user.profile_picture}/>
            <h3>{current_user.username}</h3>
            <DisplayMyRecipes user_id={current_user.id} />
            </div>
            <br></br>
            </div>
            <div className="grid-item">
                <div>
                    
                    <UploadImage token={token} />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}