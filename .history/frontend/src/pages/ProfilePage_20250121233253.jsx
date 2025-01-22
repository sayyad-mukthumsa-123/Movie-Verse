import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // To capture dynamic URL parameter

const ProfilePage = () => {
  const { email } = useParams(); // Fetch the email from the URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
        setUser(response.data); // Store the user data in state
      } catch (err) {
        setError('User not found');
      }
    };

    fetchUserData();
  }, [email]); // Dependency array includes email so effect runs on email change

  if (error) return <div>{error}</div>; // If there's an error, show it
  if (!user) return <div>Loading...</div>; // Loading state

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <div>
        <img src={user.avatarUrl} alt="Avatar" width="100" />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
