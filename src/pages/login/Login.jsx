import './login.scss';

export default function Login() {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img 
                    className="logo" 
                    src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
                    alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Enter Your Email or Phone"/>
                    <input type="password" placeholder="Enter Your Password"/>
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>Sign Up now</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you are not a bot. 
                    <b>Learn More</b></small>
                </form>
                
            </div>
        </div>
    )
}
