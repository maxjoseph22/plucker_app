const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function SignUp(formData) {
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
      profile_picture: formData.get("profile_picture")
    };
    console.log("authentication.js (services) line 12 payload --->", payload)
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
  
    let response = await fetch(`${BACKEND_URL}/users/signup`, requestOptions);
    console.log("authentication (authentication) line 22 response --->", response)
    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 200) {
      return;
    } else {
      throw new Error(
        `Received status ${response.status} when signing up. Expected 201`
      );
    }
}

export async function Login(email, password) {
  const payload = {
    email: email,
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);

  // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
  if (response.status === 201) {
    let data = await response.json();
    return data.token;
  } else {
    throw new Error(
      `Received status ${response.status} when logging in. Expected 201`
    );
  }
}