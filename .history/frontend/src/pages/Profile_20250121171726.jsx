import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    avatar: "",
  });
  const [updateData, setUpdateData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Token missing. Please log in.");
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUserData(data);
        } else {
          toast.error(data.msg || "Error fetching profile data.");
          navigate("/login");
        }
      } catch (error) {
        toast.error("An error occurred while fetching profile data.");
        console.error("Error:", error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!updateData.username && !updateData.email && !updateData.password) {
      toast.error("Please provide details to update.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();

      if (response.ok) {
        setUserData((prev) => ({
          ...prev,
          username: updateData.username || prev.username,
          email: updateData.email || prev.email,
        }));
        setUpdateData({ username: "", email: "", password: "" });
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
          <img src={userData.avatar} alt="Avatar" className="profile-avatar" />
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="New Username"
              value={updateData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="New Email"
              value={updateData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="New Password (Optional)"
              value={updateData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
