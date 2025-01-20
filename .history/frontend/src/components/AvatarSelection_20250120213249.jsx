import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/SetAvatar.css";

export default function AvatarSelection({ onAvatarSelect }) {
  const api = `https://api.multiavatar.com/4645646`;
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`,
            { responseType: "arraybuffer" } // Fetch as binary data
          );
          const base64 = `data:image/svg+xml;base64,${btoa(
            new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), "")
          )}`;
          data.push(base64);
        }
        setAvatars(data);
      } catch (error) {
        console.error("Failed to load avatars.", error);
      }
    };

    fetchAvatars();
  }, []);

  const handleAvatarSelection = (index) => {
    setSelectedAvatar(index);
    const selectedImage = avatars[index];
    localStorage.setItem("selectedAvatar", selectedImage); // Store in local storage
    if (onAvatarSelect) onAvatarSelect(selectedImage); // Pass the avatar to the parent component
  };

  return (
    <div className="avatar-container">
      <h1>Select Your Avatar</h1>
      <div className="avatars">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
            onClick={() => handleAvatarSelection(index)}
          >
            <img src={avatar} alt={`Avatar ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
