import React from "react";
import './sighin.css'
const sighin = () => {
    return (
        <div className="container" id="login">
            <div className="login-content">
                <img src="./logo512.png" alt="Your Name" className="login-image" />
                <h1>Login</h1>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    <button type="submit">Login</button>
                    <a href="/register" className="regis-btn">
                        Register
                    </a>
                </form>
            </div>
        </div>
    );
};
export default sighin