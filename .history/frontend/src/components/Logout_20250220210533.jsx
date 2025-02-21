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
      className="text-red-500 text-2xl font-semibold bg-slate-50 hover:bg-red-500 hover:text-slate-50 outline py-2 px-4 rounded-md transition-transform duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
