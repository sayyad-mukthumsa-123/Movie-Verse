import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Token missing. Please log in.");
          navigate("/login");
          return;
        }
        console.log(token);

        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
          setEmail(data.email);
          setAvatar(data.avatar);
        } else {
          toast.error(data.msg || "Error fetching profile data.");
          navigate("/login"); // Redirect to login if unauthorized
        }
      } catch (error) {
        toast.error("An error occurred while fetching profile data.");
        console.error("Error:", error);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newUsername || !newEmail) {
      toast.error("Please fill in the required fields.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          Username: newUsername,
          Email: newEmail,
          Password: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername(newUsername);
        setEmail(newEmail);
        setNewUsername("");
        setNewEmail("");
        setNewPassword("");
        toast.success("Profile updated successfully!");
      } else {
        toast.error(data.msg || "Error updating profile.");
      }
    } catch (error) {
      toast.error("An error occurred while updating profile.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="text-center">Your Profile</h1>
        <div className="profile-info">
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="New Username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="New Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="New Password (Optional)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
