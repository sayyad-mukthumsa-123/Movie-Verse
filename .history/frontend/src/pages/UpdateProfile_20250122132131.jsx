// // import { useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// // const UpdateProfile = () => {
// //   const { email } = useParams(); // Get email from URL
// //   const [username, setUsername] = useState("");
// //   const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar selected by user
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!username.trim()) {
// //       setError("Username cannot be empty");
// //       return;
// //     }

// //     try {
// //       // Construct the avatar URL based on the selected avatar
// //       const avatarUrl =
// //         selectedAvatar !== null
// //           ? `https://api.multiavatar.com/${selectedAvatar}.svg` // Ensure it's a complete URL
// //           : ""; // Default empty if no avatar is selected

// //       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
// //         username,
// //         avatarUrl, // Send the complete URL to the backend
// //       });

// //       alert(response.data.message); // Show success message from backend
// //       navigate(`/profile/${email}`); // Navigate back to the profile page
// //     } catch (err) {
// //       const errorMessage =
// //         err.response?.data?.message || "An error occurred while updating the profile.";
// //       setError(errorMessage); // Set error message
// //     }
// //   };

// //   return (
// //     <div className="update-profile-page">
// //       <h1>Update Profile</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* Use AvatarSelection */}
// //         <br />
// //         {error && <p style={{ color: "red" }}>{error}</p>}
// //         <button type="submit">Save</button>
// //         <button type="button" onClick={() => navigate(`/profile/${email}`)}>
// //           Cancel
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateProfile;


// //update profile-crt
// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// const UpdateProfile = () => {
//   const { email } = useParams(); // Get email from URL
//   const [username, setUsername] = useState("");
//   const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar selected by user
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!username.trim()) {
//       setError("Username cannot be empty");
//       return;
//     }

//     try {
//       // Construct the avatar URL based on the selected avatar
//       const avatarUrl =
//         selectedAvatar !== null
//           ? `https://api.multiavatar.com/${selectedAvatar}.svg` // Ensure it's a complete URL
//           : ""; // Default empty if no avatar is selected

//       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
//         username,
//         avatarUrl, // Send the complete URL to the backend
//       });

//       alert(response.data.message); // Show success message from backend
//       console.log(`u:${response.avatarUrl}`);
      
//       navigate(`/profile/${email}`); // Navigate back to the profile page
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.message || "An error occurred while updating the profile.";
//       setError(errorMessage); // Set error message
//     }
//   };

//   return (
//     <div className="update-profile-page">
//       <h1>Update Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* Use AvatarSelection */}
//         <br />
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit">Save</button>
//         <button type="button" onClick={() => navigate(`/profile/${email}`)}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;


//avatar-update
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component
import ResetPassword from "../components/ResetPassword";

const UpdateProfile = () => {
  const { email } = useParams(); // Get email from URL
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(""); // Avatar URL selected by user
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
        avatarUrl: selectedAvatar, // Send the complete avatar URL
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
        <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* Use AvatarSelection */}
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(`/profile/${email}`)}>
          Cancel
        </button>
      </form>
      <ResetPassword/>
    </div>
  );
};

export default UpdateProfile;
