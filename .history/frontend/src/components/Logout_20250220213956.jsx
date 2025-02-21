// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token from localStorage
//     localStorage.removeItem('email'); // Remove the email from localStorage
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="text-red-500 text-2xl font-semibold bg-slate-50 hover:bg-red-500 hover:text-slate-50  py-2 px-4 rounded-md transition-transform duration-300"
//     >
//       Logout
//     </button>
//   );
// };

// export default Logout;



//2
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-red-500 text-2xl font-semibold bg-slate-50 hover:bg-red-500 hover:text-slate-50 py-2 px-4 rounded-md transition-transform duration-300"
      >
        Logout
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-slate-900">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Are you sure you want to logout?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-slate-50 text-slate-900 px-4 py-2 rounded-md outline text-2xl hover:bg-gray-400 hover:text-slate-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
