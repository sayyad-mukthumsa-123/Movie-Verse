import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarSelection from "../components/AvatarSelection";

const UpdateProfile = () => {
  const { email } = useParams(); // Get email from URL
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar selection state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch existing user data to prefill form fields
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
        const user = response.data;
        setUsername(user.Username);
        setSelectedAvatar(user.Avatar || null); // Pre-fill avatar if it exists
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    if (selectedAvatar === null) {
      setError("Please select an avatar");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
        username,
        avatar: selectedAvatar, // Send selected avatar
      });
      alert(response.data.message); // Show success message from backend
      navigate(`/profile/${email}`); // Navigate back to the profile page
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "An error occurred while updating the profile.";
      setError(errorMessage); // Set error message
    }
  };

  return (
    <div className="update-profile-page">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* AvatarSelection component */}
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(`/profile/${email}`)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
