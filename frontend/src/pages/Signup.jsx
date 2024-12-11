export function SignupPage() {
    return (
    <div className="signup-container">
    <h2>Sign up</h2>
    <form action="/signup" method="POST">
        <label className="username">Username</label>
        <br/>
        <input type="text" id="username" name="username" placeholder="Enter your username"></input>
        <br/>

        <label className="email">E-mail</label>
        <br/>
        <input type="text" id="email" name="email" placeholder="Enter your email"></input>
        <br/>

        <label className="password">Password</label>
        <br/>
        <input type="text" id="password" name="password" placeholder="Enter your password"></input>
        <br/>

        <input type="submit" value="Login"></input>
    </form>
    <p>Already have an account? <a href="/login">Log in</a></p>
    <a href="/">Return to homepage</a>
    </div>
    )
}