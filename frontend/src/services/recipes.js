// BUG below - the BACKEND_URL link is not working. It is defaulting to the hardcoded local host below.

const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

console.log("<==== services/recipes.js says ====>\nBackend url: ", BACKEND_URL, "FIX THE ENV FILE")

export async function getMyBirdSightings(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // Destringify token; Get id from token; Put token id into URL placeholder

    const response = await fetch(`${BACKEND_URL}/sightings/<user_id>`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch sightings");
    }
    const data = await response.json();
    return data;
}

// Create new bird-sighting & recipe
export async function uploadBirdSighting(token, formData) {
    console.log("formData recipes services line 28 --->", JSON.stringify(formData))
    const response = await fetch(`${BACKEND_URL}/bird_sighting`, { 
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error("Failed to upload the image.");
    }
  
    const result = await response.json();
    console.log("Upload successful:", result);
    return result;
  }

    // Fetch the recipe from the backend
    export const fetchRecipe = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/bird_recipe/<int:sighting_id>`); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); 
        return data; // Return parsed data
      } catch (error) {
        console.error("Error fetching recipe:", error); // Log errors
        throw error; // Re-throw error for handling in the component
      }
    };

