const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

console.log("<==== services/recipes.js says ====>\nBackend url: ", BACKEND_URL, "FIX THE ENV FILE")

async function getMyRecipes(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await fetch(`${BACKEND_URL}/myrecipes`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch users");
    }
    const data = await response.json();
    return data;
}

export default getMyRecipes;
