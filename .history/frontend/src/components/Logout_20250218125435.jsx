import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    localStorage.removeItem('email'); // Remove the email from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white text-2xl font-semibold bg-red-600 hover:bg-red-500 hover:scale-110 py-2 px-4 rounded-md transition-transform duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
