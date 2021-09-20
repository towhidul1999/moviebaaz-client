import React, { useState, useRef }from 'react';
import './register.scss';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img 
                    className="logo" 
                    src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
                    alt=""
                    />
                <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies, TV Shows and More</h1>
                <h2>Watch Anywhere</h2>
                <p>Ready to Watch?</p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Enter Your Email" ref={emailRef}/>
                            <button className="registerButton" onClick={handleStart}>Start Now</button>
                        </div>
                    ):(
                        <form className="input">
                            <input type="password" placeholder="Password" ref={passwordRef}/>
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </form>
                    )
                }
                
            </div>
        </div>
    )
}
