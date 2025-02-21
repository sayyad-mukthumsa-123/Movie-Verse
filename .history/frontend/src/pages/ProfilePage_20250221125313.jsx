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
//         console.log("User Data:", response.data); // 
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

//   // Avatar is SVG, so directly inject it as HTML using dangerouslySetInnerHTML
//   const avatarSvg = user.avatarUrl ? user.avatarUrl : null;

//   return (
//     <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
//       <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">Profile</h1>
//       <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
//         <div className="flex flex-col items-center mb-6">
//           {/* Display SVG directly */}
//           {avatarSvg ? (
//             <div
//               className="w-28 h-28 mb-4"
//               dangerouslySetInnerHTML={{ __html: avatarSvg }} // Injecting SVG as raw HTML
//             />
//           ) : (
//             <div className="w-28 h-28 rounded-full border border-gray-300 mb-4 flex items-center justify-center">
//               <span>No Avatar</span>
//             </div>
//           )}
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


//id
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        setUser(response.data);
      } catch (err) {
        setError("User not found");
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;
  if (!user) return <div className="text-center text-gray-500 mt-8">Loading...</div>;
  const avatarSvg = user.avatarUrl ? user.avatarUrl : null;

  return (
    <div className="profile-page flex flex-col items-center justify-center min-h-screen bg-slate-200 px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-cyan-800 mb-6 text-center">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
        <div className="flex flex-col items-center mb-6">
          {/* {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="Avatar" className="w-28 h-28 rounded-full mb-4" />
          ) : (
            <div className="w-28 h-28 rounded-full border border-gray-300 mb-4 flex items-center justify-center">
              <span>No Avatar</span>
            </div>
          )} */}
          {avatarSvg ? (
            <div
              className="w-28 h-28 mb-4"
              dangerouslySetInnerHTML={{ __html: avatarSvg }} // Injecting SVG as raw HTML
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
            onClick={() => navigate(`/update-profile/${id}`)}
            className="w-full bg-green-800 text-lg sm:text-2xl text-white py-2 px-4 rounded-lg hover:bg-green-900 hover:scale-105 transition-transform duration-300"
          >
            Update Profile
          </button>
          <button
            onClick={() => navigate(`/reset-password/${id}`)}
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
