import { NavBar } from "../../components/NavBar";
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserDetails } from "../components/UserDetails";
import { getUserDetails } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
import Recipes from "../components/Recipes";
import { getRecipesForUser } from "../services/recipes";
// import  FollowButton from "../../components/FollowButton";
// import { UserList } from "../../components/UserList";


export function DisplayProfile() {
    const { username } = useParams();

    // const [name, setName] = useState("");
    const [myProfile, setMyProfile] = useState(false);

    const [photoLoad, setPhotoLoad] = useState(false);
    const[profile_picture, setProfilePicture] = useState("Test");
    // const [following, setFollowing] = useState(false);


    function triggerPhotoLoad() {
        setPhotoLoad(!photoLoad);
    }


    useEffect(() => {
        const token = localStorage.getItem("token");
        getUserDetails(token, username)
        .then((data) => {
            // setName(`${data.userData.firstName} ${data.userData.lastName}`);
            setMyProfile(data.userData.myProfile);
            setProfilePicture(data.userData.profile_picture);
            // setFollowing(data.userData.following);
            localStorage.setItem("token", data.token);
            })
            .catch((err) => {
                console.error(err);
            });
        }, [username, photoLoad]);


    return (
        <>
        {/* <NavBar /> */}
        <div className="profile-padding">
        <div className="grid-container">
            <div className="grid-item">
                <div className="post-card">
            <PhotoDisplay profile_picture={profile_picture}/>
            <UserDetails username={username} myProfile={myProfile}/>
            <DisplayRecipes username={username}/>
            {/* {myProfile ? <PhotoUpload triggerPhotoLoad={triggerPhotoLoad}/> : <p></p>} */}
            </div>
            <br></br>
            {/* {myProfile ? <p></p> : <FollowButton username={username} following={following} setFollowing={setFollowing}/>} */}
            {/* {following ? <Feed allowPosting={myProfile} getMethod={getPostsForUser} username={username} photoLoad={photoLoad}/> : <></>} */}
            </div>
            <div className="grid-item">
                {/* <UserList /> */}
            </div>
        </div>
        </div>
        </>
    );
}