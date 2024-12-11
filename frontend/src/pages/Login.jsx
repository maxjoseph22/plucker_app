/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"

// This is just HTML - there is no functionality to this form

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
        console.log(email)
      }
    
    function handlePasswordChange(event) {
        setPassword(event.target.value);
        console.log(password)
      }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
                <label className="username">Username</label>
                <br/>
                <input type="text" id="username" name="username" placeholder="Enter your username" value={email} onChange={handleEmailChange}></input>
                <br/>

                <label className="password">Password</label>
                <br/>
                <input type="text" id="password" name="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}></input>
                <br/>

                <input type="submit" value="Login"></input>
            </form>
            <p>Don't have an account? <a href="/signup">Make one!</a></p>
            <a href="/">Return to homepage</a>
        </div>
    )
}