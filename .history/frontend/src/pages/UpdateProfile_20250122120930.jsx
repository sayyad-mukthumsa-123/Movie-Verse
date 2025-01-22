import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProfile = () => {
  const { email } = useParams(); // Get email from URL
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
        username,
        avatarUrl,
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
        <label>
          Avatar URL:
          <input
            type="text"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </label>
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
