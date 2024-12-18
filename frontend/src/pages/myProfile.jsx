import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"; 
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useNavigate } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
import { UploadImage } from "../components/UploadBirdImage";
import { DisplayMyBirdSightings } from "../components/DisplayMyBirdSightings";
// import { getRecipesForUser } from "../services/recipes";
import pluckerIcon from "../assets/icon/pluckers.png";
import "./MyProfile.css";

export function MyProfile() {

  const goToRecipe = () => {
    //add to go to recipe functionality here
    console.log("Recipe Clicked");}

    const [username, setUsername] = useState("");
    const [user_id, setUserId] = useState("");
    const [profile_picture, setProfilePicture] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      const current_user_string = localStorage.getItem("currentUser");
      const current_user = JSON.parse(current_user_string);
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
    }, [username, profile_picture, user_id, navigate]);

    return (
    <>
    <Navbar />
      <div className='main-container'>
        <div className='plucker-logo'>
          <img src={pluckerIcon} alt='Plucker logo' />
        </div>
        <div className='user-container'>
          <PhotoDisplay profile_picture={profile_picture} />
          <h3>{username}</h3>
          <UploadImage />
        </div>
                  {/* This needs to be linked up properly */}
        <div className='recipe-card'>
          <h1>Sightings:</h1>
          <button
            type='submit'
            className='submit-button'
            role='submit-button'
            id='submit'
            onClick={() => goToRecipe()}>
            Sighting 1
          </button>
          <button
            type='submit'
            className='submit-button'
            role='submit-button'
            id='submit'
            onClick={() => goToRecipe()}>
            Sighting 2
          </button>
          <button
            type='submit'
            className='submit-button'
            role='submit-button'
            id='submit'
            onClick={() => goToRecipe()}>
            Sighting 3
          </button>
          <button
            type='submit'
            className='submit-button'
            role='submit-button'
            id='submit'
            onClick={() => goToRecipe()}>
            Sighting 4
          </button>
          {/* <Recipe user_id={user_id} /> */}
        </div>
        <br></br>
      </div>
      <div className='grid-item'></div>
    </>
  );
}
//         return (
//             <>
//               <div className="profile-padding">
//                 <h1>Profile Page</h1>
//                 <div className="profile-content">
//                   <div className="profile-card">
//                     <PhotoDisplay profile_picture={current_user.profile_picture} />
//                     <h3>{current_user.username}</h3>
//                     <UploadImage token={token} />
//                     <DisplayMyBirdSightings user_id={current_user.id} username={current_user.username} />
//                   </div>
//                 </div>
          
//                   </div>
//             </>
//           );
//         }
