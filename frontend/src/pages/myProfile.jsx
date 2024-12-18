import { useNavigate, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"; 
import { PhotoDisplay } from "../components/PhotoDisplay";
// import { useParams } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
// import { Recipe } from "../components/Recipe";
import { DisplayMyBirdSightings } from "../components/DisplayMyBirdSightings";
// import { getRecipesForUser } from "../services/recipes";
import pluckerIcon from "../assets/icon/pluckers.png";
import "./MyProfile.css";

export function MyProfile() {

//   const addBird = () => {
//     //add to add bird here functionality here
//     console.log("Bird Added");
//   };

  const goToRecipe = () => {
    //add to go to recipe functionality here
    console.log("Recipe Clicked");}



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
    <Navbar />
      <div className='main-container'>
        <div className='plucker-logo'>
          <img src={pluckerIcon} alt='Plucker logo' />
        </div>
        <div className='user-container'>
          <PhotoDisplay profile_picture={profile_picture} />
          <h3>{username}</h3>
          <div className='button-container'>
            <button
              type='submit'
              className='submit-button'
              role='submit-button'
              id='submit'
              onClick={() => addBird()}>
              Add Bird
          {/* This needs to be linked up properly */}
            </button>
          </div>
        </div>
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
