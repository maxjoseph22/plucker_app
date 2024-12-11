// This is just HTML - there is no functionality to this form

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./../CSS.css"
// import { NavBar } from "../../components/NavBar";
// import { login } from "../../services/authentication";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const token = await login(email, password);
            localStorage.setItem("token", token);
            navigate("/myProfile");
        } catch (err) {
            console.error(err);
            navigate("/login");
        }
    }
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <>
        {/* <NavBar /> */}
        <body>
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" action="/login" method="POST" onSubmit={handleSubmit}>
                <label className="username">Username</label>
                <br></br>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Enter your username"
                    value={ email }
                    onChange={handleEmailChange} />
                <br></br>
                <label className="password">Password</label>
                <br></br>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password"
                    value={ password }
                    onChange={handlePasswordChange} />
                <br></br>
                <input 
                    type="submit" 
                    value="Login"
                    className="submit-button"
                    role="submit-button"
                    id="submit" />
            </form>
            <a href="/">Return to homepage</a>
            <br></br>
            <a href="/signup">Sign Up for a new account</a>
        </div>
        </body>
        </>
    )
}