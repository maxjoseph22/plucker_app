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
    const [profile_picture, setProfilePicture] = useState("");
    const token = localStorage.getItem("token");
    const current_user_string = localStorage.getItem("currentUser");
    const current_user = JSON.parse(current_user_string);
    const navigate = useNavigate();

    console.log("current user line 26 ---> ", current_user);

    useEffect(() => {
        if (!token) {
            console.error("No token found - myProfile.jsx line 30; redirect to login");
            navigate("/login");
            return;
        }

        // Set user details
        if (current_user) {
            setUsername(current_user.username);
            setProfilePicture(current_user.profile_picture);
            setUserId(current_user.id);
        }

        // Example API call - uncomment if you need real user data
        // getUserInfo(token).then((data) => {
        //     localStorage.setItem("token", data.token);
        // });
    }, [token, navigate, current_user]);

    return (
        <>
          <div className="profile-padding">
            <h1>Profile Page</h1>
            <div className="profile-content">
              <div className="profile-card">
                <PhotoDisplay profile_picture={current_user.profile_picture} />
                <h3>{current_user.username}</h3>
                <DisplayMyRecipes user_id={current_user.id} />
              </div>
              <div className="profile-card">
                <PhotoDisplay profile_picture={profile_picture} />
                <h3>{username}</h3>
                <UploadImage token={token} />
                <DisplayMyRecipes user_id={user_id} />
              </div>
            </div>
          </div>
        </>
      );
    }
