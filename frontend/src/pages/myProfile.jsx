// import { NavBar } from "../../components/NavBar";
import { PhotoDisplay } from "../components/PhotoDisplay";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { UserDetails } from "../components/UserDetails";
import { getUserInfo } from "../services/users";
// import { PhotoUpload } from "../../components/PhotoUpload";
// import { Recipe } from "../components/Recipe";
// import { getRecipesForUser } from "../services/recipes";
import NavBar from "../components/Navbar";
import pluckerIcon from "../assets/icon/pluckers.png";
import "./MyProfile.css";

export function MyProfile() {
  const [username, setUsername] = useState("Jim Jones");
  // const [user_id, setUserId] = useState("");
  const [profile_picture, setProfilePicture] = useState("Test");

  const addBird = () => {
    //add to add bird here functionality here
    console.log("Bird Added");
  };

  const goToRecipe = () => {
    //add to go to recipe functionality here
    console.log("Recipe Clicked");
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserInfo(token)
      .then((data) => {
        setUsername(`${data.userData.username}`);
        setProfilePicture(data.userData.profile_picture);
        // setUserId(data.userData._id);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [username]);

  return (
    <>
      <NavBar />
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
