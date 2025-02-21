// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AvatarSelection from "../components/AvatarSelection"; 

// const UpdateProfile = () => {
//   const { email } = useParams(); 
//   const [username, setUsername] = useState("");
//   const [selectedAvatar, setSelectedAvatar] = useState(""); 
//   const [user, setUser] = useState(null); 
//   const navigate = useNavigate();

//   // Fetch the user data on component mount to pre-fill the form
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
//         setUser(response.data);
//         setUsername(response.data.username || ""); // Set username from the fetched user data
//         setSelectedAvatar(response.data.avatarUrl || ""); // Set avatar if available
//       } catch (err) {
//         toast.error("Failed to load user data.");
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   const handleSave = async () => {
//     if (!username.trim()) {
//       toast.error("Username cannot be empty", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return;
//     }

//     if (!selectedAvatar.trim()) {
//       toast.error("Please select an avatar", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:5000/api/profile/${email}`, {
//         username,
//         avatarUrl: selectedAvatar, // Send the complete avatar URL (SVG in this case)
//       });

//       // Show success toast message
//       toast.success(response.data.message, {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       // Wait for the toast to be visible before navigating
//       setTimeout(() => {
//         navigate(`/profile/${email}`); // Navigate back to the profile page after successful update
//       }, 3000); // Delay of 3 seconds (should match the toast duration)
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.message || "An error occurred while updating the profile.";
//       toast.error(errorMessage, {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
//         <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-800">
//           Update Profile
//         </h1>
//         <form className="space-y-6">
//           <div>
//             <label className="block text-xl sm:text-2xl font-medium mb-2 sm:mb-3 text-cyan-800">
//               Username
//             </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
//             />
//           </div>
//           <div>
//             <AvatarSelection onSelectAvatar={setSelectedAvatar} /> {/* Avatar selection component */}
//           </div>
//           <div className="flex flex-col sm:flex-row justify-between gap-4">
//             <button
//               type="button"
//               onClick={handleSave}
//               className="w-full sm:w-5/12 bg-green-800 text-2xl hover:bg-green-700 hover:scale-105 transition-transform text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
//             >
//               Save
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate(`/profile/${email}`)}
//               className="w-full sm:w-5/12 bg-red-700 text-2xl hover:bg-red-600 hover:scale-105 transition-transform text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer position="top-right" />
//     </div>
//   );
// };

// export default UpdateProfile;


//id
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvatarSelection from "../components/AvatarSelection"; 

const UpdateProfile = () => {
  const { userId } = useParams();  // Get userId from URL
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(""); 
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  const { id } = useParams();
  // Fetch the user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        setUser(response.data);
        setUsername(response.data.username || ""); 
        setSelectedAvatar(response.data.avatarUrl || ""); 
      } catch (err) {
        toast.error("Failed to load user data.");
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleSave = async () => {
    if (!username.trim()) {
      toast.error("Username cannot be empty", { position: "top-right", autoClose: 3000 });
      return;
    }

    if (!selectedAvatar.trim()) {
      toast.error("Please select an avatar", { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/api/profile/${id}`, {
        username,
        avatarUrl: selectedAvatar,
      });

      toast.success(response.data.message, { position: "top-right", autoClose: 3000 });

      // Navigate back after update
      setTimeout(() => {
        navigate(`api/profile/${id}`);
      }, 3000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred while updating the profile.";
      toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-800">
          Update Profile
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-xl sm:text-2xl font-medium mb-2 sm:mb-3 text-cyan-800">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
            />
          </div>
          <div>
            <AvatarSelection onSelectAvatar={setSelectedAvatar} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-5/12 bg-green-800 text-2xl hover:bg-green-700 hover:scale-105 transition-transform text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(`/profile/${userId}`)}
              className="w-full sm:w-5/12 bg-red-700 text-2xl hover:bg-red-600 hover:scale-105 transition-transform text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default UpdateProfile;
