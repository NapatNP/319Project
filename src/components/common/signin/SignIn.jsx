import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './sighin.css';

const Sighin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password.');
      return;
    }
  
    // Fetch data from the server to check email and password
    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
  
      console.log('Request Payload:', JSON.stringify(formData));
      console.log('Response:', response);
  
      if (response.ok) {
        // Successfully logged in
        alert('Sign in Success');
        navigate('/'); // Redirect to dashboard after successful login
      } else {
        // Invalid email or password
        alert('Invalid Email/Password');
      }
  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-content">
      <div className="login-card">
        <img src="./favicon.ico" alt="Your Name" className="login-image" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleChange} />

          <button type="submit">Login</button>
          <a href="/register" className="regis-btn">
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Sighin;
