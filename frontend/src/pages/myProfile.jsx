// import { NavBar } from "../../components/NavBar";
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
import { Recipe } from "../components/Recipe";
// import { getRecipesForUser } from "../services/recipes";


export function MyProfile() {
    const [username, setUsername] = useState("");
    const [user_id, setUserId] = useState("");
    const [profile_picture, setProfilePicture] = useState("Test");

    useEffect(() => {
        const token = localStorage.getItem("token");
        getUserInfo(token)
        .then((data) => {
            setUsername(`${data.userData.username}`);
            setProfilePicture(data.userData.profile_picture);
            setUserId(data.userData._id)
            localStorage.setItem("token", data.token);
            })
            .catch((err) => {
                console.error(err);
            });
        }, [username]);

    return (
        <>
        {/* <NavBar /> */}
        <div className="profile-padding">
        <div className="grid-container">
            <div className="grid-item">
                <div className="post-card">
            <PhotoDisplay profile_picture={profile_picture}/>
            <h3>{username}</h3>
            <Recipe user_id={user_id}/>
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