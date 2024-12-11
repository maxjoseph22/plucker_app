// Backend port: 8000

const BACKEND_URL = "http://localhost:8000"

export async function signup(email, password, username) {
    const payload = {
      email: email,
      password: password,
      username: username
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
  
    let response = await fetch(`${BACKEND_URL}/users`, requestOptions);
  
    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 201) {
      return;
    } else {
      throw new Error(
        `Received status ${response.status} when signing up. Expected 201`
      );
    }
}