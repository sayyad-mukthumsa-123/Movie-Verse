// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import "../Styles/AvatarSelection.css"

// // // // export default function AvatarSelection() {
// // // //   const api = `https://api.multiavatar.com/4645646`;
// // // //   const [avatars, setAvatars] = useState([]);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [selectedAvatar, setSelectedAvatar] = useState(
// // // //     JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
// // // //   );

// // // //   useEffect(() => {
// // // //     const fetchAvatars = async () => {
// // // //       try {
// // // //         const data = [];
// // // //         for (let i = 0; i < 4; i++) {
// // // //           const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
// // // //           const base64 = `data:image/svg+xml;base64,${btoa(
// // // //             new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // // //           )}`;
// // // //           data.push(base64);
// // // //         }
// // // //         setAvatars(data);
// // // //         setIsLoading(false);
// // // //       } catch (error) {
// // // //         toast.error("Failed to load avatars.");
// // // //       }
// // // //     };

// // // //     fetchAvatars();
// // // //   }, [api]);

// // // //   const handleAvatarSelect = (index) => {
// // // //     setSelectedAvatar(index);
// // // //     localStorage.setItem("selectedAvatar", JSON.stringify(index)); // Store selected avatar in localStorage
// // // //   };

// // // //   const handleSetProfilePicture = () => {
// // // //     if (selectedAvatar === undefined) {
// // // //       toast.error("Please select an avatar.");
// // // //     } else {
// // // //       // Your code for setting the profile picture, sending data to server, etc.
// // // //       toast.success("Avatar selected!");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       {isLoading ? (
// // // //         <div>Loading avatars...</div>
// // // //       ) : (
// // // //         <div>
// // // //           <h1>Pick an Avatar</h1>
// // // //           <div className="avatars">
// // // //             {avatars.map((avatar, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
// // // //                 onClick={() => handleAvatarSelect(index)}
// // // //               >
// // // //                 <img
// // // //                   src={avatar}
// // // //                   alt={`avatar-${index}`}
// // // //                   style={{ cursor: "pointer", border: selectedAvatar === index ? "2px solid green" : "none" }}
// // // //                 />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           {/* <button onClick={handleSetProfilePicture}>Set as Profile Picture</button> */}
// // // //         </div>
// // // //       )}
// // // //       <ToastContainer />
// // // //     </div>
// // // //   );
// // // // }


// // // export default function AvatarSelection({ setSelectedAvatar }) {
// // //     const api = `https://api.multiavatar.com/4645646`;
// // //     const [avatars, setAvatars] = useState([]);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [selectedAvatar, setSelectedAvatarLocal] = useState(
// // //         // JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
// // //     );

// // //     useEffect(() => {
// // //         const fetchAvatars = async () => {
// // //             try {
// // //                 const data = [];
// // //                 for (let i = 0; i < 4; i++) {
// // //                     const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
// // //                     const base64 = `data:image/svg+xml;base64,${btoa(
// // //                         new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
// // //                     )}`;
// // //                     data.push(base64);
// // //                 }
// // //                 setAvatars(data);
// // //                 setIsLoading(false);
// // //             } catch (error) {
// // //                 toast.error("Failed to load avatars.");
// // //             }
// // //         };

// // //         fetchAvatars();
// // //     }, [api]);

// // //     const handleAvatarSelect = (index) => {
// // //         setSelectedAvatarLocal(index);
// // //         setSelectedAvatar(index); // Pass selected avatar to Register component
// // //         localStorage.setItem("selectedAvatar", JSON.stringify(index));
// // //     };

// // //     return (
// // //         <div>
// // //             {isLoading ? (
// // //                 <div>Loading avatars...</div>
// // //             ) : (
// // //                 <div>
// // //                     <div className="heading-avatar">Pick an Avatar</div>
// // //                     <div className="avatars">
// // //                         {avatars.map((avatar, index) => (
// // //                             <div
// // //                                 key={index}
// // //                                 className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
// // //                                 onClick={() => handleAvatarSelect(index)}
// // //                             >
// // //                                 <img
// // //                                     src={avatar}
// // //                                     alt={`avatar-${index}`}
// // //                                     style={{ border: selectedAvatar === index ? "4px solid #0dcaf0" : "none" }}
// // //                                 />
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }


// // //profile-update-crt
// // export default function AvatarSelection({ setSelectedAvatar }) {
// //     const api = `https://api.multiavatar.com/4645646`;
// //     const [avatars, setAvatars] = useState([]);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [selectedAvatar, setSelectedAvatarLocal] = useState(null);
  
// //     useEffect(() => {
// //       const fetchAvatars = async () => {
// //         try {
// //           const data = [];
// //           for (let i = 0; i < 4; i++) {
// //             const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
// //             const base64 = `data:image/svg+xml;base64,${btoa(
// //               new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
// //             )}`;
// //             data.push(base64);
// //           }
// //           setAvatars(data);
// //           setIsLoading(false);
// //         } catch (error) {
// //           toast.error("Failed to load avatars.");
// //         }
// //       };
  
// //       fetchAvatars();
// //     }, [api]);
  
// //     const handleAvatarSelect = (index) => {
// //       setSelectedAvatarLocal(index);
// //       setSelectedAvatar(index); // Ensure correct index is passed
// //      console.log(`a:${index}`);
     
      
// //     };
  
// //     return (
// //       <div>
// //         {isLoading ? (
// //           <div>Loading avatars...</div>
// //         ) : (
// //           <div>
// //             <div className="heading-avatar">Pick an Avatar</div>
// //             <div className="avatars">
// //               {avatars.map((avatar, index) => (
// //                 <div
// //                   key={index}
// //                   className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
// //                   onClick={() => handleAvatarSelect(index)}
// //                 >
// //                   <img
// //                     src={avatar}
// //                     alt={`avatar-${index}`}
// //                     style={{ border: selectedAvatar === index ? "4px solid #0dcaf0" : "none" }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
  

// //avatar-update
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from 'react-toastify';
// import "../Styles/AvatarSelection.css"
// import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the styles


// export default function AvatarSelection({ setSelectedAvatar }) {
//   const api = `https://api.multiavatar.com/4645646`;
//   const [avatars, setAvatars] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedAvatar, setSelectedAvatarLocal] = useState(null);

//   useEffect(() => {
//     const fetchAvatars = async () => {
//       try {
//         const data = [];
//         for (let i = 0; i < 4; i++) {
//           const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
//           const base64 = `data:image/svg+xml;base64,${btoa(
//             new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
//           )}`;
//           data.push(base64);
//         }
//         setAvatars(data);
//         setIsLoading(false);
//       } catch (error) {
//         toast.error("Failed to load avatars.");
//       }
//     };

//     fetchAvatars();
//   }, [api]);

//   const handleAvatarSelect = (avatarUrl) => {
//     setSelectedAvatarLocal(avatarUrl);  // Save selected avatar URL
//     setSelectedAvatar(avatarUrl); // Pass selected avatar URL to the parent component
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <div>Loading avatars...</div>
//       ) : (
//         <div>
//           <div className="heading-avatar">Pick an Avatar</div>
//           <div className="avatars">
//             {avatars.map((avatarUrl, index) => (
//               <div
//                 key={index}
//                 className={`avatar ${selectedAvatar === avatarUrl ? "selected" : ""}`}
//                 onClick={() => handleAvatarSelect(avatarUrl)} // Pass the avatar URL instead of index
//               >
//                 <img
//                   src={avatarUrl}
//                   alt={`avatar-${index}`}
//                   style={{ border: selectedAvatar === avatarUrl ? "4px solid #0dcaf0" : "none" }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


//css
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the styles

export default function AvatarSelection({ setSelectedAvatar }) {
  const api = `https://api.multiavatar.com/4645646`;
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatarLocal] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
          const base64 = `data:image/svg+xml;base64,${btoa(
            new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          )}`;
          data.push(base64);
        }
        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load avatars.");
      }
    };

    fetchAvatars();
  }, [api]);

  const handleAvatarSelect = (avatarUrl) => {
    setSelectedAvatarLocal(avatarUrl);  // Save selected avatar URL
    setSelectedAvatar(avatarUrl); // Pass selected avatar URL to the parent component
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center text-lg">Loading avatars...</div>
      ) : (
        <div>
          <div className="text-2xl text-cyan-800 font-semibold mb-4 text-center">Pick an Avatar</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {avatars.map((avatarUrl, index) => (
              <div
                key={index}
                className={`relative cursor-pointer rounded-lg overflow-hidden ${
                  selectedAvatar === avatarUrl ? "border-4 border-teal-400" : "border-2 border-gray-300"
                }`}
                onClick={() => handleAvatarSelect(avatarUrl)}
              >
                <img
                  src={avatarUrl}
                  alt={`avatar-${index}`}
                  className="w-30 h-25 object-cover transition-transform transform hover:scale-105"
                />
                {selectedAvatar === avatarUrl && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white font-bold">
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
