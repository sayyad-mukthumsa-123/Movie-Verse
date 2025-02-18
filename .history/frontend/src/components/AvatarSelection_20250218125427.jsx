import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AvatarSelection = ({ onSelectAvatar }) => {
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatarLocal] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/avatars");
        const data = await response.json();
        setAvatars(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load avatars.");
        setIsLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  const handleAvatarSelect = (avatarId, svg) => {
    setSelectedAvatarLocal(avatarId);
    onSelectAvatar(svg);
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center text-lg">Loading avatars...</div>
      ) : (
        <div>
          <div className="text-2xl text-cyan-800 font-semibold mb-4 text-center">Pick an Avatar</div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {avatars.map(({ id, svg }, index) => (
              <div
                key={index}
                className={`relative cursor-pointer rounded-lg overflow-hidden 
                  ${selectedAvatar === id ? "border-4 border-cyan-800" : "border-2 border-gray-300"}`}
                onClick={() => handleAvatarSelect(id, svg)}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: svg }}
                  className="w-20 h-20 p-1 object-cover transition-transform transform hover:scale-105"
                />
                {selectedAvatar === id && (
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
};

export default AvatarSelection;
