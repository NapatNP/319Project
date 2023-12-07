// Register.js
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            {/* ส่วนอื่น ๆ ของ Register Component */}
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Register;