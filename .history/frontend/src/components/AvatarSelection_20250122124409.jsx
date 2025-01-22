import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/AvatarSelection.css"

// // export default function AvatarSelection() {
// //   const api = `https://api.multiavatar.com/4645646`;
// //   const [avatars, setAvatars] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [selectedAvatar, setSelectedAvatar] = useState(
// //     JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
// //   );

// //   useEffect(() => {
// //     const fetchAvatars = async () => {
// //       try {
// //         const data = [];
// //         for (let i = 0; i < 4; i++) {
// //           const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
// //           const base64 = `data:image/svg+xml;base64,${btoa(
// //             new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
// //           )}`;
// //           data.push(base64);
// //         }
// //         setAvatars(data);
// //         setIsLoading(false);
// //       } catch (error) {
// //         toast.error("Failed to load avatars.");
// //       }
// //     };

// //     fetchAvatars();
// //   }, [api]);

// //   const handleAvatarSelect = (index) => {
// //     setSelectedAvatar(index);
// //     localStorage.setItem("selectedAvatar", JSON.stringify(index)); // Store selected avatar in localStorage
// //   };

// //   const handleSetProfilePicture = () => {
// //     if (selectedAvatar === undefined) {
// //       toast.error("Please select an avatar.");
// //     } else {
// //       // Your code for setting the profile picture, sending data to server, etc.
// //       toast.success("Avatar selected!");
// //     }
// //   };

// //   return (
// //     <div>
// //       {isLoading ? (
// //         <div>Loading avatars...</div>
// //       ) : (
// //         <div>
// //           <h1>Pick an Avatar</h1>
// //           <div className="avatars">
// //             {avatars.map((avatar, index) => (
// //               <div
// //                 key={index}
// //                 className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
// //                 onClick={() => handleAvatarSelect(index)}
// //               >
// //                 <img
// //                   src={avatar}
// //                   alt={`avatar-${index}`}
// //                   style={{ cursor: "pointer", border: selectedAvatar === index ? "2px solid green" : "none" }}
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //           {/* <button onClick={handleSetProfilePicture}>Set as Profile Picture</button> */}
// //         </div>
// //       )}
// //       <ToastContainer />
// //     </div>
// //   );
// // }


// export default function AvatarSelection({ setSelectedAvatar }) {
//     const api = `https://api.multiavatar.com/4645646`;
//     const [avatars, setAvatars] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [selectedAvatar, setSelectedAvatarLocal] = useState(
//         // JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
//     );

//     useEffect(() => {
//         const fetchAvatars = async () => {
//             try {
//                 const data = [];
//                 for (let i = 0; i < 4; i++) {
//                     const response = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`, { responseType: 'arraybuffer' });
//                     const base64 = `data:image/svg+xml;base64,${btoa(
//                         new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
//                     )}`;
//                     data.push(base64);
//                 }
//                 setAvatars(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 toast.error("Failed to load avatars.");
//             }
//         };

//         fetchAvatars();
//     }, [api]);

//     const handleAvatarSelect = (index) => {
//         setSelectedAvatarLocal(index);
//         setSelectedAvatar(index); // Pass selected avatar to Register component
//         localStorage.setItem("selectedAvatar", JSON.stringify(index));
//     };

//     return (
//         <div>
//             {isLoading ? (
//                 <div>Loading avatars...</div>
//             ) : (
//                 <div>
//                     <div className="heading-avatar">Pick an Avatar</div>
//                     <div className="avatars">
//                         {avatars.map((avatar, index) => (
//                             <div
//                                 key={index}
//                                 className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
//                                 onClick={() => handleAvatarSelect(index)}
//                             >
//                                 <img
//                                     src={avatar}
//                                     alt={`avatar-${index}`}
//                                     style={{ border: selectedAvatar === index ? "4px solid #0dcaf0" : "none" }}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }


//profile-update-crt
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
  
    const handleAvatarSelect = (index) => {
      setSelectedAvatarLocal(index);
      setSelectedAvatar(index); // Ensure correct index is passed
    };
  
    return (
      <div>
        {isLoading ? (
          <div>Loading avatars...</div>
        ) : (
          <div>
            <div className="heading-avatar">Pick an Avatar</div>
            <div className="avatars">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
                  onClick={() => handleAvatarSelect(index)}
                >
                  <img
                    src={avatar}
                    alt={`avatar-${index}`}
                    style={{ border: selectedAvatar === index ? "4px solid #0dcaf0" : "none" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  