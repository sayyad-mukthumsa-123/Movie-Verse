// // // // import { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import axios from "axios";

// // // // const ProfilePage = () => {
// // // //   const { email } = useParams(); // Fetch the email from the URL
// // // //   const [user, setUser] = useState(null);
// // // //   const [error, setError] = useState(null);
// // // //   const navigate = useNavigate(); // To navigate to the update profile page

// // // //   useEffect(() => {
// // // //     const fetchUserData = async () => {
// // // //       try {
// // // //         const response = await axios.get(
// // // //           `http://localhost:5000/api/profile/${email}`
// // // //         );
// // // //         setUser(response.data); // Store the user data in state
// // // //       } catch (err) {
// // // //         setError("User not found");
// // // //       }
// // // //     };

// // // //     if (email) {
// // // //       fetchUserData();
// // // //     }
// // // //   }, [email]);

// // // //   const handleImageError = (event) => {
// // // //     event.target.src =
// // // //       "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
// // // //   };

// // // //   const handleResetPasswordClick = () => {
// // // //     navigate(`/reset-password/${email}`); // Navigate to reset password page
// // // //   };

// // // //   if (error)
// // // //     return <div className="text-red-500 text-center mt-8">{error}</div>;
// // // //   if (!user)
// // // //     return <div className="text-center text-gray-500 mt-8">Loading...</div>;

// // // //   return (
// // // //     <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
// // // //       <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">
// // // //         Profile
// // // //       </h1>
// // // //       <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
// // // //         <div className="flex flex-col items-center mb-6">
// // // //           <img
// // // //             src={
// // // //               user.avatarUrl ||
// // // //               "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"
// // // //             } // Use the avatarUrl from the database
// // // //             alt="Avatar"
// // // //             className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gray-300 mb-4"
// // // //             onError={handleImageError} // Handle image loading errors
// // // //           />
// // // //           <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
// // // //             Username: {user.username}
// // // //           </h2>
// // // //           <p className="text-lg sm:text-2xl text-gray-600 text-center">
// // // //             Email: {user.email}
// // // //           </p>
// // // //         </div>
// // // //         <div className="flex flex-col space-y-4">
// // // //           <button
// // // //             onClick={() => navigate(`/update-profile/${email}`)}
// // // //             className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
// // // //           >
// // // //             Update Profile
// // // //           </button>
// // // //           <button
// // // //             onClick={handleResetPasswordClick}
// // // //             className="w-full bg-blue-600 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
// // // //           >
// // // //             Reset Password
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfilePage;


// // // import { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // const ProfilePage = () => {
// // //   const { email } = useParams();
// // //   const [user, setUser] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           `http://localhost:5000/api/profile/${email}`
// // //         );
// // //         setUser(response.data);
// // //       } catch (err) {
// // //         setError("User not found");
// // //       }
// // //     };

// // //     if (email) {
// // //       fetchUserData();
// // //     }
// // //   }, [email]);

// // //   // Function to get avatar (Base64 or URL)
// // //   const getAvatar = () => {
// // //     if (user?.avatarUrl) {
// // //       if (user.avatarUrl.startsWith("data:image")) {
// // //         // Already a Base64 image
// // //         return user.avatarUrl;
// // //       } else {
// // //         // Convert raw SVG to Base64
// // //         return `data:image/svg+xml;base64,${btoa(user.avatarUrl)}`;
// // //       }
// // //     }
// // //     return ""; // Default blank image
// // //   };

// // //   if (error)
// // //     return <div className="text-red-500 text-center mt-8">{error}</div>;
// // //   if (!user)
// // //     return <div className="text-center text-gray-500 mt-8">Loading...</div>;

// // //   return (
// // //     <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
// // //       <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">
// // //         Profile
// // //       </h1>
// // //       <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
// // //         <div className="flex flex-col items-center mb-6">
// // //           {getAvatar() ? (
// // //             <img
// // //               src={getAvatar()}
// // //               alt="User Avatar"
// // //               className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gray-300 mb-4"
// // //             />
// // //           ) : (
// // //             <p className="text-gray-500">No avatar available</p>
// // //           )}
// // //           <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
// // //             Username: {user.username}
// // //           </h2>
// // //           <p className="text-lg sm:text-2xl text-gray-600 text-center">
// // //             Email: {user.email}
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-col space-y-4">
// // //           <button
// // //             onClick={() => navigate(`/update-profile/${email}`)}
// // //             className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
// // //           >
// // //             Update Profile
// // //           </button>
// // //           <button
// // //             onClick={() => navigate(`/reset-password/${email}`)}
// // //             className="w-full bg-blue-600 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
// // //           >
// // //             Reset Password
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;


// // //avt
// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const ProfilePage = () => {
// //   const { email } = useParams();
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/api/profile/${email}`
// //         );
// //         setUser(response.data);
// //       } catch (err) {
// //         setError("User not found");
// //       }
// //     };

// //     if (email) {
// //       fetchUserData();
// //     }
// //   }, [email]);

// //   if (error)
// //     return <div className="text-red-500 text-center mt-8">{error}</div>;
// //   if (!user)
// //     return <div className="text-center text-gray-500 mt-8">Loading...</div>;

// //   return (
// //     <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
// //       <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">
// //         Profile
// //       </h1>
// //       <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
// //         <div className="flex flex-col items-center mb-6">
// //           <img
// //             src={user.avatarUrl} // This ensures the correct avatar is displayed
// //             alt="User Avatar"
// //             className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gray-300 mb-4"
// //           />
// //           <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
// //             Username: {user.username}
// //           </h2>
// //           <p className="text-lg sm:text-2xl text-gray-600 text-center">
// //             Email: {user.email}
// //           </p>
// //         </div>
// //         <div className="flex flex-col space-y-4">
// //           <button
// //             onClick={() => navigate(`/update-profile/${email}`)}
// //             className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
// //           >
// //             Update Profile
// //           </button>
// //           <button
// //             onClick={() => navigate(`/reset-password/${email}`)}
// //             className="w-full bg-blue-600 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
// //           >
// //             Reset Password
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// //avt-2
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const ProfilePage = () => {
//   const { email } = useParams();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
//         setUser(response.data);
//       } catch (err) {
//         setError("User not found");
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
//   if (!user) return <div className="text-center text-gray-500 mt-8">Loading...</div>;

//   return (
//     <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
//       <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">Profile</h1>
//       <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={user.avatarUrl} // Displaying Base64 image directly
//             alt="User Avatar"
//             className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gray-300 mb-4"
//             onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
//           />
//           <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
//             Username: {user.username}
//           </h2>
//           <p className="text-lg sm:text-2xl text-gray-600 text-center">Email: {user.email}</p>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <button
//             onClick={() => navigate(`/update-profile/${email}`)}
//             className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
//           >
//             Update Profile
//           </button>
//           <button
//             onClick={() => navigate(`/reset-password/${email}`)}
//             className="w-full bg-blue-600 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
//           >
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


//avt-3
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
        console.log("User Data:", response.data); // ✅ Debugging
        setUser(response.data);
      } catch (err) {
        setError("User not found");
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!user) return <div className="text-center text-gray-500 mt-8">Loading...</div>;

  // Avatar URL from backend (base64 SVG)
  const avatarUrl = user.avatarUrl
    ? user.avatarUrl // Avatar from backend
    : null; // No fallback image, just null

  return (
    <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
        <div className="flex flex-col items-center mb-6">
          {/* Only show avatar if available */}
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border border-gray-300 mb-4"
            />
          ) : (
            <div className="w-28 h-28 rounded-full border border-gray-300 mb-4 flex items-center justify-center">
              <span>No Avatar</span>
            </div>
          )}
          <h2 className="text-xl sm:text-3xl font-semibold text-gray-700 mb-2 sm:mb-3 text-center">
            Username: {user.username}
          </h2>
          <p className="text-lg sm:text-2xl text-gray-600 text-center">Email: {user.email}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate(`/update-profile/${email}`)}
            className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
          >
            Update Profile
          </button>
          <button
            onClick={() => navigate(`/reset-password/${email}`)}
            className="w-full bg-blue-600 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
