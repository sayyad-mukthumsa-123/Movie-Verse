// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useParams } from 'react-router-dom'; // To capture dynamic URL parameter

// // // // // const ProfilePage = () => {
// // // // //   const { email } = useParams(); // Fetch the email from the URL
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     // Fetch user data from backend
// // // // //     const fetchUserData = async () => {
// // // // //       try {
// // // // //         const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
// // // // //         setUser(response.data); // Store the user data in state
// // // // //       } catch (err) {
// // // // //         setError('User not found');
// // // // //       }
// // // // //     };

// // // // //     fetchUserData();
// // // // //   }, [email]); // Dependency array includes email so effect runs on email change

// // // // //   if (error) return <div>{error}</div>; // If there's an error, show it
// // // // //   if (!user) return <div>Loading...</div>; // Loading state

// // // // //   return (
// // // // //     <div className="profile-page">
// // // // //       <h1>User Profile</h1>
// // // // //       <div>
// // // // //         <img src={user.avatarUrl} alt="Avatar" width="100" />
// // // // //         <h2>{user.username}</h2>
// // // // //         <p>Email: {user.email}</p>
// // // // //         <p>Password: {user.password}</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfilePage;


// // // // import { useEffect, useState } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // const ProfilePage = () => {
// // // //   const { email } = useParams(); // Fetch the email from the URL
// // // //   const [user, setUser] = useState(null);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchUserData = async () => {
// // // //       try {
// // // //         const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
// // // //         setUser(response.data); // Store the user data in state
// // // //       } catch (err) {
// // // //         setError('User not found');
// // // //       }
// // // //     };

// // // //     if (email) {
// // // //       fetchUserData();
// // // //     }
// // // //   }, [email]);

// // // //   if (error) return <div>{error}</div>;
// // // //   if (!user) return <div>Loading...</div>;

// // // //   return (
// // // //     <div className="profile-page">
// // // //       <h1>User Profile</h1>
// // // //       <div>
// // // //         <img src={user.avatarUrl} alt="Avatar" width="100" />
// // // //         <h2>{user.username}</h2>
// // // //         <p>Email: {user.email}</p>
// // // //         {/* Remove sensitive information like password */}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfilePage;

// // // //profile-get
// // // import { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";

// // // const ProfilePage = () => {
// // //   const { email } = useParams(); // Fetch the email from the URL
// // //   const [user, setUser] = useState(null);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchUserData = async () => {
// // //       try {
// // //         const response = await axios.get(
// // //           `http://localhost:5000/api/profile/${email}`
// // //         );
// // //         setUser(response.data); // Store the user data in state
// // //       } catch (err) {
// // //         setError("User not found");
// // //       }
// // //     };

// // //     if (email) {
// // //       fetchUserData();
// // //     }
// // //   }, [email]);

// // //   const handleImageError = (event) => {
// // //     event.target.src = "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
// // //   };

// // //   if (error) return <div>{error}</div>;
// // //   if (!user) return <div>Loading...</div>;

// // //   return (
// // //     <div className="profile-page">
// // //       <h1>User Profile</h1>
// // //       <div>
// // //         <img
// // //           src={user.avatarUrl || "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"} // Placeholder if no avatar
// // //           alt="Avatar"
// // //           width="100"
// // //           onError={handleImageError} // Handle image loading errors
// // //         />
// // //         <h2>Username:{user.username}</h2>
// // //         <p>Email: {user.email}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfilePage;


// // //update profile

// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const ProfilePage = () => {
// //   const { email } = useParams(); // Fetch the email from the URL
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate(); // To navigate to the update profile page

// //   useEffect(() => {
// //     const fetchUserData = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/api/profile/${email}`
// //         );
// //         setUser(response.data); // Store the user data in state
// //         console.log(`p:${response}`)
// //       } catch (err) {
// //         setError("User not found");
// //       }
// //     };

// //     if (email) {
// //       fetchUserData();
// //     }
// //   }, [email]);

// //   const handleImageError = (event) => {
// //     event.target.src =
// //       "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
// //   };

// //   if (error) return <div>{error}</div>;
// //   if (!user) return <div>Loading...</div>;

// //   return (
// //     <div className="profile-page">
// //       <h1>User Profile</h1>
// //       <div>
// //         <img
// //           src={user.avatarUrl || "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"} // Use the avatarUrl from the database
// //           alt="Avatar"
// //           width="100"
// //           onError={handleImageError} // Handle image loading errors
// //         />
// //         <h2>Username: {user.username}</h2>
// //         <p>Email: {user.email}</p>
// //         <button onClick={() => navigate(`/update-profile/${email}`)}>
// //           Update Profile
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfilePage;


// //avatar-update
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ResetPassword from "../components/ResetPassword";

// const ProfilePage = () => {
//   const { email } = useParams(); // Fetch the email from the URL
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // To navigate to the update profile page

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/profile/${email}`
//         );
//         setUser(response.data); // Store the user data in state
//       } catch (err) {
//         setError("User not found");
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   const handleImageError = (event) => {
//     event.target.src =
//       "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
//   };

//   if (error) return <div>{error}</div>;
//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="profile-page">
//       <h1>User Profile</h1>
//       <div>
//         <img
//           src={user.avatarUrl || "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"} // Use the avatarUrl from the database
//           alt="Avatar"
//           width="100"
//           onError={handleImageError} // Handle image loading errors
//         />
//         <h2>Username: {user.username}</h2>
//         <p>Email: {user.email}</p>
//         <button onClick={() => navigate(`/update-profile/${email}`)}>
//           Update Profile
//         </button>
//       </div>
    
//     </div>
//   );
// };

// export default ProfilePage;


//reset-pwd-route
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";


// const ProfilePage = () => {
//   const { email } = useParams(); // Fetch the email from the URL
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // To navigate to the update profile page

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/profile/${email}`
//         );
//         setUser(response.data); // Store the user data in state
//       } catch (err) {
//         setError("User not found");
//       }
//     };

//     if (email) {
//       fetchUserData();
//     }
//   }, [email]);

//   const handleImageError = (event) => {
//     event.target.src =
//       "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
//   };

//   const handleResetPasswordClick = () => {
//     navigate(`/reset-password/${email}`); // Navigate to reset password page
//   };

//   if (error) return <div>{error}</div>;
//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="profile-page">
//       <h1>User Profile</h1>
//       <div>
//         <img
//           src={user.avatarUrl || "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"} // Use the avatarUrl from the database
//           alt="Avatar"
//           width="100"
//           onError={handleImageError} // Handle image loading errors
//         />
//         <h2>Username: {user.username}</h2>
//         <p>Email: {user.email}</p>
//         <button onClick={() => navigate(`/update-profile/${email}`)}>
//           Update Profile
//         </button>
//         <button onClick={handleResetPasswordClick}>Reset Password</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


//css
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { email } = useParams(); // Fetch the email from the URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate to the update profile page

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/profile/${email}`
        );
        setUser(response.data); // Store the user data in state
      } catch (err) {
        setError("User not found");
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const handleImageError = (event) => {
    event.target.src =
      "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"; // Fallback image URL
  };

  const handleResetPasswordClick = () => {
    navigate(`/reset-password/${email}`); // Navigate to reset password page
  };

  if (error)
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!user)
    return <div className="text-center text-gray-500 mt-8">Loading...</div>;

  return (
    <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200">
      <h1 className="text-5xl font-bold text-orange-800 mb-6">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="flex flex-col items-center mb-6">
          <img
            src={
              user.avatarUrl ||
              "https://dummyimage.com/100x100/cccccc/ffffff&text=No+Image"
            } // Use the avatarUrl from the database
            alt="Avatar"
            className="w-28 h-28 rounded-full border border-gray-300 mb-4"
            onError={handleImageError} // Handle image loading errors
          />
          <h2 className="text-xl font-semibold text-gray-700">
            Username: {user.username}
          </h2>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate(`/update-profile/${email}`)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Update Profile
          </button>
          <button
            onClick={handleResetPasswordClick}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
