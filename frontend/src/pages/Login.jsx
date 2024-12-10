// This is just HTML - there is no functionality to this form

export function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form action="/login" method="POST">
                <label className="username">Username</label>
                <br></br>
                <input type="text" id="username" name="username" placeholder="Enter your username"></input>
                <br></br>
                <label className="password">Password</label>
                <br></br>
                <input type="text" id="password" name="password" placeholder="Enter your password"></input>
                <br></br>
                <input type="submit" value="Login"></input>
            </form>
            <a href="/">Return to homepage</a>
        </div>
    )
}