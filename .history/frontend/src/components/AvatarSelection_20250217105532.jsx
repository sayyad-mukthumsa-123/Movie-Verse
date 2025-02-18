import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AvatarSelection({ setSelectedAvatar }) {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatarLocal] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/avatars");
        setAvatars(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load avatars.");
      }
    };

    fetchAvatars();
  }, []);

  const handleAvatarSelect = (avatarUrl) => {
    setSelectedAvatarLocal(avatarUrl);
    setSelectedAvatar(avatarUrl);
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center text-lg">Loading avatars...</div>
      ) : (
        <div>
          <div className="text-2xl text-cyan-800 font-semibold mb-4 text-center">Pick an Avatar</div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {avatars.map((avatarUrl, index) => (
              <div
                key={index}
                className={`relative cursor-pointer rounded-lg overflow-hidden 
                  ${selectedAvatar === avatarUrl ? "border-4 border-cyan-800" : "border-2 border-gray-300"}`}
                onClick={() => handleAvatarSelect(avatarUrl)}
              >
                <img
                  src={avatarUrl}
                  alt={`avatar-${index}`}
                  className="w-40 h-30 p-1 object-cover transition-transform transform hover:scale-105"
                />
                {selectedAvatar === avatarUrl && (
                  <div className="absolute inset-0 text-xl bg-slate-800 bg-opacity-60 flex justify-center items-center text-white font-bold">
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


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function AvatarSelection({ setSelectedAvatar }) {
//   const [avatars, setAvatars] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedAvatar, setSelectedAvatarLocal] = useState(null);

//   useEffect(() => {
//     const fetchAvatars = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/avatars");
//         setAvatars(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         toast.error("Failed to load avatars.");
//         setIsLoading(false);
//       }
//     };

//     fetchAvatars();
//   }, []);

//   const handleAvatarSelect = (avatarId) => {
//     setSelectedAvatarLocal(avatarId);
//     setSelectedAvatar(avatarId);
//   };

//   return (
//     <div className="p-4">
//       {isLoading ? (
//         <div className="text-center text-lg">Loading avatars...</div>
//       ) : (
//         <div>
//           <div className="text-2xl text-cyan-800 font-semibold mb-4 text-center">Pick an Avatar</div>
//           <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//             {avatars.map(({ id, svg }, index) => (
//               <div
//                 key={index}
//                 className={`relative cursor-pointer rounded-lg overflow-hidden 
//                   ${selectedAvatar === id ? "border-4 border-cyan-800" : "border-2 border-gray-300"}`}
//                 onClick={() => handleAvatarSelect(id)}
//               >
//                 <div
//                   dangerouslySetInnerHTML={{ __html: svg }}
//                   className="w-20 h-20 p-1 object-cover transition-transform transform hover:scale-105"
//                 />
//                 {selectedAvatar === id && (
//                   <div className="absolute inset-0 text-xl bg-slate-800 bg-opacity-60 flex justify-center items-center text-white font-bold">
//                     Selected
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


