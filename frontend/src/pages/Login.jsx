import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import "./../CSS.css"
// import { NavBar } from "../../components/NavBar";
import { login } from "../services/authentication";
import pluckerIcon from "../assets/icon/plucker.png";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            // login() sets items in localStorage
            await login(email, password)
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
        <div className="home-container">
        {/* <NavBar /> */}
        <div className="name-container">
            <div className="plucker-logo"><img src={pluckerIcon} alt="Plucker logo" /></div>
            <h1>Plucker</h1><h2>Where watching birds is cool!</h2></div>
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
                <div className="buttons-container">
                <input 
                    type="submit" 
                    value="Login"
                    className="submit-button"
                    role="submit-button"
                    id="submit" />
                <br></br>
                <input 
                    type="submit" 
                    value="Signup"
                    className="submit-button"
                    role="submit-button"
                    id="submit" />
                    </div>
            </form>
        </div>
        </div>
    )
}