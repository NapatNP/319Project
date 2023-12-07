import React from "react";
import './sighin.css'
const sighin = () => {
    return (
        <div className="login-container">
            <img src="./logo512.png" alt="Your Name" className="login-image" />
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default sighin