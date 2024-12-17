const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

console.log("<==== services/sightings.js says ====>\nBackend url: ", BACKEND_URL, "FIX THE ENV FILE")

export async function getAllSightings(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await fetch(`${BACKEND_URL}/sightings`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch users");
    }
    const data = await response.json();
    return data;
}

export async function getSighting(id) {
    const requestOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await fetch(`${BACKEND_URL}/sightings`, requestOptions);

    if (response.status !== 200) {
        throw new Error("Unable to fetch users");
    }
    const data = await response.json();
    return data;
}

