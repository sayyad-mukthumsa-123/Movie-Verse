import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvatarSelection from "../components/AvatarSelection";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          setUsername(data.username);
          setEmail(data.email);
          setSelectedAvatar(data.avatar);
        } else {
          toast.error(data.msg || "Failed to fetch profile.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("An error occurred while fetching profile.");
      }
    };

    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username,
          email,
          password,
          avatar: selectedAvatar,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Profile updated successfully.");
        setIsEditing(false);
      } else {
        toast.error(data.msg || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating profile.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h1 className="card-title text-center mb-5">Profile</h1>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="profileUsername"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={!isEditing}
                />
                <label htmlFor="profileUsername">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="profileEmail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                />
                <label htmlFor="profileEmail">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="profilePassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={!isEditing}
                />
                <label htmlFor="profilePassword">Password</label>
              </div>
              {isEditing && (
                <AvatarSelection
                  setSelectedAvatar={setSelectedAvatar}
                  defaultAvatar={selectedAvatar}
                />
              )}
              {!isEditing ? (
                <div className="text-center">
                  <img
                    src={selectedAvatar}
                    alt="Selected Avatar"
                    className="profile-avatar"
                  />
                </div>
              ) : null}
              <div className="d-grid">
                {isEditing ? (
                  <>
                    <Button
                      variant="outline-success"
                      className="mb-2"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={handleEditToggle}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline-primary"
                    onClick={handleEditToggle}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
