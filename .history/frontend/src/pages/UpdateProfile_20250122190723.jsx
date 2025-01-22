// // // // import { useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";
// // // // import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// // // // const UpdateProfile = () => {
// // // //   const { email } = useParams(); // Get email from URL
// // // //   const [username, setUsername] = useState("");
// // // //   const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar selected by user
// // // //   const [error, setError] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async (event) => {
// // // //     event.preventDefault();

// // // //     if (!username.trim()) {
// // // //       setError("Username cannot be empty");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       // Construct the avatar URL based on the selected avatar
// // // //       const avatarUrl =
// // // //         selectedAvatar !== null
// // // //           ? `https://api.multiavatar.com/${selectedAvatar}.svg` // Ensure it's a complete URL
// // // //           : ""; // Default empty if no avatar is selected

// // // //       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
// // // //         username,
// // // //         avatarUrl, // Send the complete URL to the backend
// // // //       });

// // // //       alert(response.data.message); // Show success message from backend
// // // //       navigate(`/profile/${email}`); // Navigate back to the profile page
// // // //     } catch (err) {
// // // //       const errorMessage =
// // // //         err.response?.data?.message || "An error occurred while updating the profile.";
// // // //       setError(errorMessage); // Set error message
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="update-profile-page">
// // // //       <h1>Update Profile</h1>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <label>
// // // //           Username:
// // // //           <input
// // // //             type="text"
// // // //             value={username}
// // // //             onChange={(e) => setUsername(e.target.value)}
// // // //             required
// // // //           />
// // // //         </label>
// // // //         <br />
// // // //         <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* Use AvatarSelection */}
// // // //         <br />
// // // //         {error && <p style={{ color: "red" }}>{error}</p>}
// // // //         <button type="submit">Save</button>
// // // //         <button type="button" onClick={() => navigate(`/profile/${email}`)}>
// // // //           Cancel
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UpdateProfile;


// // // //update profile-crt
// // // import { useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// // // const UpdateProfile = () => {
// // //   const { email } = useParams(); // Get email from URL
// // //   const [username, setUsername] = useState("");
// // //   const [selectedAvatar, setSelectedAvatar] = useState(null); // Avatar selected by user
// // //   const [error, setError] = useState(null);
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     if (!username.trim()) {
// // //       setError("Username cannot be empty");
// // //       return;
// // //     }

// // //     try {
// // //       // Construct the avatar URL based on the selected avatar
// // //       const avatarUrl =
// // //         selectedAvatar !== null
// // //           ? `https://api.multiavatar.com/${selectedAvatar}.svg` // Ensure it's a complete URL
// // //           : ""; // Default empty if no avatar is selected

// // //       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
// // //         username,
// // //         avatarUrl, // Send the complete URL to the backend
// // //       });

// // //       alert(response.data.message); // Show success message from backend
// // //       console.log(`u:${response.avatarUrl}`);
      
// // //       navigate(`/profile/${email}`); // Navigate back to the profile page
// // //     } catch (err) {
// // //       const errorMessage =
// // //         err.response?.data?.message || "An error occurred while updating the profile.";
// // //       setError(errorMessage); // Set error message
// // //     }
// // //   };

// // //   return (
// // //     <div className="update-profile-page">
// // //       <h1>Update Profile</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>
// // //           Username:
// // //           <input
// // //             type="text"
// // //             value={username}
// // //             onChange={(e) => setUsername(e.target.value)}
// // //             required
// // //           />
// // //         </label>
// // //         <br />
// // //         <AvatarSelection setSelectedAvatar={setSelectedAvatar} /> {/* Use AvatarSelection */}
// // //         <br />
// // //         {error && <p style={{ color: "red" }}>{error}</p>}
// // //         <button type="submit">Save</button>
// // //         <button type="button" onClick={() => navigate(`/profile/${email}`)}>
// // //           Cancel
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default UpdateProfile;


// // //avatar-update
// // import { useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// // const UpdateProfile = () => {
// //   const { email } = useParams(); // Get email from URL
// //   const [username, setUsername] = useState("");
// //   const [selectedAvatar, setSelectedAvatar] = useState(""); // Avatar URL selected by user
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!username.trim()) {
// //       setError("Username cannot be empty");
// //       return;
// //     }

// //     try {
// //       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
// //         username,
// //         avatarUrl: selectedAvatar, // Send the complete avatar URL
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


// //css
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarSelection from "../components/AvatarSelection"; // Import AvatarSelection component

// const UpdateProfile = () => {
//   const { email } = useParams(); // Get email from URL
//   const [username, setUsername] = useState("");
//   const [selectedAvatar, setSelectedAvatar] = useState(""); // Avatar URL selected by user
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!username.trim()) {
//       setError("Username cannot be empty");
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
//         username,
//         avatarUrl: selectedAvatar, // Send the complete avatar URL
//       });

//       alert(response.data.message); // Show success message from backend
//       navigate(`/profile/${email}`); // Navigate back to the profile page
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.message || "An error occurred while updating the profile.";
//       setError(errorMessage); // Set error message
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-teal-600">Update Profile</h1>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <AvatarSelection setSelectedAvatar={setSelectedAvatar} />
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <div className="flex justify-between">
//             <button
//               type="submit"
//               className="w-5/12 bg-green-800 text-8xl hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:bg-green-800"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate(`/profile/${email}`)}
//               className="w-5/12 text-2xl bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

//remove submit
const UpdateProfile = () => {
  const { email } = useParams(); // Get email from URL
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(""); // Avatar URL selected by user
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSave = async () => {
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
    <div className="min-h-screen  bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-cyan-800">Update Profile</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-2xl font-medium mb-3 text-cyan-800">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border outline-red-800 border-red-800 rounded-md shadow-sm focus:outline-none focus:ring-cyan-800 focus:border-cyan-800 sm:text-sm"
            />
          </div>
          <div>
            <AvatarSelection setSelectedAvatar={setSelectedAvatar} />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-between">
            <button
              type="button" // Removed 'submit' type, now it's just a normal button
              onClick={handleSave} // Added onClick handler for saving
              className="w-5/12 bg-green-800 text-xl hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:bg-green-800"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(`/profile/${email}`)}
              className="w-5/12 text-2xl bg-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
