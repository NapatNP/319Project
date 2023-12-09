// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashbord.css';


const Dashboard = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Error fetching user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">Res <span>Q</span> connect</a></h1>
                </div>
            </div>

            <div className="dashboard-content">
                <h1>Welcome to the Dashboard</h1>
                <div className="user-cards">
                    {userData && userData.map((user) => (
                        <div key={user._id} className="user-card">
                            <div className="card-content">
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </header>
    );
};

export default Dashboard;
