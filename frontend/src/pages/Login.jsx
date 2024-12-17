import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import "./../CSS.css"
// import { NavBar } from "../../components/NavBar";
import { login } from "../services/authentication";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const token = await login(email, password);
            console.log("USER LOGIN TOKEN:", "\n", token.sub)
            const userToken = token.sub
            localStorage.setItem("token", userToken);
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
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" action="/login" method="POST" onSubmit={handleSubmit}>
                <label className="username">Username</label>

                <br></br>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email"
                    value={ email }
                    onChange={handleEmailChange} />
                <br></br>
                <label className="password">Password</label>
                <br></br>
                <input 
                    type="text" 
                    id="password" 
                    name="password" 
                    placeholder="password"
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
        </>
    )
}