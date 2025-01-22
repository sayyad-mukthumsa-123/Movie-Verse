import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { email } = useParams(); // Get email from route parameter
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user details by email
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${email}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUser();
  }, [email]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <img src={user.avatarUrl} alt="Avatar" style={{ width: "100px", borderRadius: "50%" }} />
    </div>
  );
};

export default Profile;
