import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({ Username: "", Email: "", Password: "" });
  const [isEditing, setIsEditing] = useState(false);
  const userId = "USER_ID_FROM_AUTH_TOKEN"; // Replace with actual user ID (e.g., decoded from token)

  useEffect(() => {
    // Fetch user profile
    axios
      .get(`/api/profile/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    axios
      .put(`/api/profile/${userId}`, profile, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((response) => {
        alert("Profile updated successfully");
        setIsEditing(false);
        setProfile(response.data.user);
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="Username"
          value={profile.Username}
          disabled={!isEditing}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={profile.Email}
          disabled={!isEditing}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="Password"
          value={profile.Password}
          disabled={!isEditing}
          onChange={handleInputChange}
        />
      </div>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
