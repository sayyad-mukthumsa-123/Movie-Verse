import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/profile', { // Ensure you are using the correct backend URL
          headers: {
            'x-token': token,
          },
        });
        setUserData(response.data);
        setNewUsername(response.data.username);
        setNewEmail(response.data.email);
        setNewAvatar(response.data.avatar);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        navigate('/login'); // Redirect to login if not authenticated
      }
    };
  
    fetchUserData();
  }, [navigate]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const updatedData = {
        Username: newUsername,
        Email: newEmail,
        Avatar: newAvatar, // New Avatar URL if changed
      };
      await axios.put('/profile', updatedData, {
        headers: {
          'x-token': token,
        },
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="profile-container">
      {userData ? (
        <>
          <h2>Profile</h2>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Avatar:</strong>
            <img src={userData.avatar} alt="User Avatar" style={{ width: '100px', height: '100px' }} />
          </div>

          <form onSubmit={handleSubmit}>
            <h3>Update Profile</h3>
            <label>Username:</label>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <br />
            <label>Avatar URL:</label>
            <input
              type="text"
              value={newAvatar}
              onChange={(e) => setNewAvatar(e.target.value)}
            />
            <br />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
