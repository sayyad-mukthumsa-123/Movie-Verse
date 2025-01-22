import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AvatarSelection from "../components/AvatarSelection";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(""); // To store avatar URL
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
          setEmail(data.email);
          setPassword(data.password);
          setSelectedAvatar(data.avatar);
          setAvatarUrl(data.avatarUrl); // Assuming avatarUrl is stored in the response
        } else {
          toast.error(data.msg || "Failed to fetch profile data.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      } else {
        toast.error(data.msg || "Failed to update profile.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h1 className="card-title text-center mb-5">Profile</h1>

              {/* Display current profile information */}
              <div className="mb-4 text-center">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px" }}
                  />
                ) : (
                  <div className="avatar-placeholder">No Avatar</div>
                )}
                <h4>{username}</h4>
                <p>{email}</p>
                {/* Password should not be displayed in plain text */}
                <p>Password: ********</p>
              </div>

              <form onSubmit={handleUpdate}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="floatingUsername">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <AvatarSelection
                  setSelectedAvatar={setSelectedAvatar}
                  selectedAvatar={selectedAvatar}
                />
                <div className="d-grid">
                  <Button variant="outline-info" type="submit">
                    Update Profile
                  </Button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
