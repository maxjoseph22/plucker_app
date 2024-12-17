const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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