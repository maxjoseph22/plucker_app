const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

console.log("<==== services/recipes.js says ====>\nBackend url: ", BACKEND_URL, "FIX THE ENV FILE")

async function getMyRecipes(token) {
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

export default getMyRecipes;
