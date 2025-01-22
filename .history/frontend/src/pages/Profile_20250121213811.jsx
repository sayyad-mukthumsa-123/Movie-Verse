// // // import React, { useState, useEffect } from "react";
// // // // import "../Styles/Profile.css";
// // // import axios from "axios";

// // // const Profile = () => {
// // //   const [userData, setUserData] = useState({
// // //     Username: "",
// // //     Email: "",
// // //     Avatar: "",
// // //     Password: "",
// // //   });
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [updatedData, setUpdatedData] = useState({});

// // //   useEffect(() => {
// // //     const fetchProfileData = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const response = await axios.get("/api/profile", {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         setUserData(response.data);
// // //         setUpdatedData(response.data); // Initialize update data
// // //       } catch (error) {
// // //         console.error("Error fetching profile data:", error.response.data);
// // //       }
// // //     };
// // //     fetchProfileData();
// // //   }, []);

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setUpdatedData((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleUpdate = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const response = await axios.put("/api/profile", updatedData, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });
// // //       alert(response.data.msg);
// // //       setUserData(updatedData); // Update the state with the new data
// // //       setIsEditing(false);
// // //     } catch (error) {
// // //       console.error("Error updating profile data:", error.response.data);
// // //     }
// // //   };

// // //   return (
// // //     <div className="profile-container">
// // //       <h1>Profile</h1>
// // //       <div className="profile-card">
// // //         <img src={userData.Avatar} alt="Avatar" className="profile-avatar" />
// // //         <div className="profile-details">
// // //           <div className="detail-item">
// // //             <label>Username:</label>
// // //             {isEditing ? (
// // //               <input
// // //                 type="text"
// // //                 name="Username"
// // //                 value={updatedData.Username}
// // //                 onChange={handleInputChange}
// // //               />
// // //             ) : (
// // //               <span>{userData.Username}</span>
// // //             )}
// // //           </div>
// // //           <div className="detail-item">
// // //             <label>Email:</label>
// // //             <span>{userData.Email}</span>
// // //           </div>
// // //           <div className="detail-item">
// // //             <label>Password:</label>
// // //             {isEditing ? (
// // //               <input
// // //                 type="password"
// // //                 name="Password"
// // //                 value={updatedData.Password}
// // //                 onChange={handleInputChange}
// // //               />
// // //             ) : (
// // //               <span>******</span>
// // //             )}
// // //           </div>
// // //         </div>
// // //         {isEditing ? (
// // //           <button onClick={handleUpdate} className="save-button">
// // //             Save
// // //           </button>
// // //         ) : (
// // //           <button onClick={() => setIsEditing(true)} className="edit-button">
// // //             Edit
// // //           </button>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;


// // import React, { useState, useEffect } from "react";
// // import "../Styles/Profile.css"
// // import axios from "axios";

// // const Profile = () => {
// //   const [userData, setUserData] = useState({
// //     Username: "",
// //     Email: "",
// //     Avatar: "",
// //     Password: "",
// //   });
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [updatedData, setUpdatedData] = useState({});

// //   useEffect(() => {
// //     const fetchProfileData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) {
// //           console.error("Token is missing!");
// //           return;
// //         }

// //         console.log(`Token: ${token}`);
// //         const response = await axios.get("http://localhost:5000/api/profile", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setUserData(response.data);
// //         setUpdatedData(response.data); // Initialize updated data with the current data
// //       } catch (error) {
// //         console.error("Error fetching profile data:", error.response?.data || error);
// //         alert(error.response?.data?.msg || "An error occurred while fetching data.");
// //       }
// //     };
// //     fetchProfileData();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setUpdatedData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleUpdate = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         alert("Token missing");
// //         return;
// //       }

// //       const response = await axios.put("http://localhost:5000/api/profile", updatedData, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
      
// //       alert(response.data.msg);
// //       setUserData(updatedData); // Update the state with the new data
// //       setIsEditing(false);
// //     } catch (error) {
// //       console.error("Error updating profile data:", error.response?.data || error);
// //       alert(error.response?.data?.msg || "An error occurred while updating data.");
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       <h1>Profile</h1>
// //       <div className="profile-card">
// //         <img src={userData.Avatar} alt="Avatar" className="profile-avatar" />
// //         <div className="profile-details">
// //           <div className="detail-item">
// //             <label>Username:</label>
// //             {isEditing ? (
// //               <input
// //                 type="text"
// //                 name="Username"
// //                 value={updatedData.Username}
// //                 onChange={handleInputChange}
// //               />
// //             ) : (
// //               <span>{userData.Username}</span>
// //             )}
// //           </div>
// //           <div className="detail-item">
// //             <label>Email:</label>
// //             <span>{userData.Email}</span>
// //           </div>
// //           <div className="detail-item">
// //             <label>Password:</label>
// //             {isEditing ? (
// //               <input
// //                 type="password"
// //                 name="Password"
// //                 value={updatedData.Password}
// //                 onChange={handleInputChange}
// //               />
// //             ) : (
// //               <span>******</span>
// //             )}
// //           </div>
// //         </div>
// //         {isEditing ? (
// //           <button onClick={handleUpdate} className="save-button">
// //             Save
// //           </button>
// //         ) : (
// //           <button onClick={() => setIsEditing(true)} className="edit-button">
// //             Edit
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


// import React, { useState, useEffect } from "react";
// import "../Styles/Profile.css";
// import axios from "axios";

// const Profile = () => {
//   const [userData, setUserData] = useState({
//     Username: "",
//     Email: "",
//     Avatar: "",
//     Password: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedData, setUpdatedData] = useState({});

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Get token from localStorage
//         if (!token) {
//           console.error("Token is missing!");
//           return;
//         }

//         console.log(`Token: ${token}`);
//         // Send token to backend to get user-specific profile details
//         const response = await axios.get("http://localhost:5000/api/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with token
//           },
//         });

//         setUserData(response.data); // Set user data on successful response
//         setUpdatedData(response.data); // Initialize updated data with the current data
//       } catch (error) {
//         console.error("Error fetching profile data:", error.response?.data || error);
//         alert(error.response?.data?.msg || "An error occurred while fetching data.");
//       }
//     };

//     fetchProfileData(); // Fetch profile data when the component is mounted
//   }, []); // Empty dependency array ensures this runs once when the component is mounted

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       if (!token) {
//         alert("Token missing");
//         return;
//       }

//       const response = await axios.put("http://localhost:5000/api/profile", updatedData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Authorization header with token
//         },
//       });

//       alert(response.data.msg);
//       setUserData(updatedData); // Update the state with the new data
//       setIsEditing(false); // Exit edit mode
//     } catch (error) {
//       console.error("Error updating profile data:", error.response?.data || error);
//       alert(error.response?.data?.msg || "An error occurred while updating data.");
//     }
//   };

//   return (
//     <div className="profile-container">
//       <h1>Profile</h1>
//       <div className="profile-card">
//         <img src={userData.Avatar} alt="Avatar" className="profile-avatar" />
//         <div className="profile-details">
//           <div className="detail-item">
//             <label>Username:</label>
//             {isEditing ? (
//               <input
//                 type="text"
//                 name="Username"
//                 value={updatedData.Username}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               <span>{userData.Username}</span>
//             )}
//           </div>
//           <div className="detail-item">
//             <label>Email:</label>
//             <span>{userData.Email}</span> {/* Display user's email */}
//           </div>
//           <div className="detail-item">
//             <label>Password:</label>
//             {isEditing ? (
//               <input
//                 type="password"
//                 name="Password"
//                 value={updatedData.Password}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               <span>******</span>
//             )}
//           </div>
//         </div>
//         {isEditing ? (
//           <button onClick={handleUpdate} className="save-button">
//             Save
//           </button>
//         ) : (
//           <button onClick={() => setIsEditing(true)} className="edit-button">
//             Edit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


// profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");  // Redirect if no token
            return;
        }

        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setUser(data.user);  // Set user details to state
                } else {
                    toast.error(data.msg || 'Failed to fetch profile.');
                }
            } catch (error) {
                toast.error('An error occurred. Please try again later.');
                console.error('Error:', error);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <h3>Username: {user.Username}</h3>
                <h3>Email: {user.Email}</h3>
                <img src={user.Avatar} alt="Avatar" />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Profile;
