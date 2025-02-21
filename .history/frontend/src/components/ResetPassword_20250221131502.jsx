// // import React, { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const ResetPassword = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [newPassword, setNewPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

// //   const validatePassword = (password) => {
// //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
// //     return passwordRegex.test(password);
// //   };

// //   const handleResetPassword = async (e) => {
// //     e.preventDefault();

// //     if (!email || !newPassword) {
// //       toast.error('Please fill all fields', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //       });
// //       return;
// //     }

// //     if (newPassword.length < 8) {
// //       toast.error('Password must be at least 8 characters long', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //       });
// //       return;
// //     }

// //     if (!validatePassword(newPassword)) {
// //       toast.error(
// //         'Password must contain at least one capital letter, one small letter, one number, and one special symbol',
// //         {
// //           position: 'top-right',
// //           autoClose: 3000,
// //         }
// //       );
// //       return;
// //     }

// //     try {
// //       const response = await axios.put(
// //         'http://localhost:5000/api/reset-password',
// //         { email, newPassword }
// //       );
// //       toast.success(response.data.message, {
// //         position: 'top-right',
// //         autoClose: 3000,
// //       });
// //       setTimeout(() => {
// //         // Clear user session and navigate to login page after success
// //         localStorage.removeItem('token');
// //         localStorage.removeItem('email');
// //         navigate('/login');
// //       }, 3000);
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Error resetting password', {
// //         position: 'top-right',
// //         autoClose: 3000,
// //       });
// //     }
// //   };

// //   const handleReadOnlyClick = (e) => {
// //     e.preventDefault();
// //     toast.error('Email field is read-only and cannot be edited.', {
// //       position: 'top-right',
// //       autoClose: 3000,
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
// //         <h2 className="text-3xl font-bold text-center text-cyan-800">Reset Password</h2>
// //         <form className="space-y-6" onSubmit={handleResetPassword}>
// //           <div>
// //             <label className="block text-2xl font-medium text-cyan-800">Email (Read-Only)</label>
// //             <input
// //               type="email"
// //               value={email}
// //               readOnly
// //               onClick={handleReadOnlyClick}
// //               className=" mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-2xl font-medium text-cyan-800">New Password</label>
// //             <div className="relative">
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 value={newPassword}
// //                 onChange={(e) => setNewPassword(e.target.value)}
// //                 required
// //                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute text-xl right-3 top-4 font-bold text-cyan-800"
// //                 onClick={() => setShowPassword(!showPassword)}
// //               >
// //                 {showPassword ? 'Hide' : 'Show'}
// //               </button>
// //             </div>
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full scale-90 text-2xl bg-green-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700  hover:scale-100 transition-transform focus:outline-none"
// //           >
// //             Reset Password
// //           </button>
// //         </form>
// //       </div>
// //       <ToastContainer position="top-right" />
// //     </div>
// //   );
// // };

// // export default ResetPassword;


// //id
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ResetPassword = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const fetchUserEmail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
//         console.log(response.data.email);
        
//         setEmail(response.data.email);
//         console.log(email);
        
//       } catch (error) {
//         toast.error('Failed to fetch user email', { position: 'top-right', autoClose: 3000 });
//       }
//     };
//     if (id) {
//       fetchUserEmail();
//     }
//   }, [id]);

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!email || !newPassword) {
//       toast.error('Please fill all fields', { position: 'top-right', autoClose: 3000 });
//       return;
//     }

//     if (!validatePassword(newPassword)) {
//       toast.error(
//         'Password must contain at least one capital letter, one small letter, one number, and one special symbol',
//         { position: 'top-right', autoClose: 3000 }
//       );
//       return;
//     }

//     try {
//       const response = await axios.put('http://localhost:5000/api/reset-password', { email, newPassword });
//       toast.success(response.data.message, { position: 'top-right', autoClose: 3000 });
//       setTimeout(() => {
//         localStorage.removeItem('token');
//         navigate('/login');
//       }, 3000);
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error resetting password', { position: 'top-right', autoClose: 3000 });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center text-cyan-800">Reset Password</h2>
//         <form className="space-y-6" onSubmit={handleResetPassword}>
//           <div>
//             <label className="block text-2xl font-medium text-cyan-800">Email (Read-Only)</label>
//             <input
//               type="email"
//               value={email}
//               readOnly
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
//             />
//           </div>
//           <div>
//             <label className="block text-2xl font-medium text-cyan-800">New Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//                 className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
//               />
//               <button
//                 type="button"
//                 className="absolute text-xl right-3 top-4 font-bold text-cyan-800"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full scale-90 text-2xl bg-green-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 hover:scale-100 transition-transform focus:outline-none"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//       <ToastContainer position="top-right" />
//     </div>
//   );
// };

// export default ResetPassword;


//id-2
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        if (response) {
          console.log(response.data);
          
          setEmail(response.data.email);
        } else {
          toast.error('Email not found', { position: 'top-right', autoClose: 3000 });
        }
      } catch (error) {
        toast.error('Failed to fetch user email', { position: 'top-right', autoClose: 3000 });
        console.error('Error fetching email:', error);
      }
    };

    if (id) {
      fetchUserEmail();
    }
  }, [id]);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      toast.error('Please fill all fields', { position: 'top-right', autoClose: 3000 });
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error(
        'Password must contain at least one capital letter, one small letter, one number, and one special symbol',
        { position: 'top-right', autoClose: 3000 }
      );
      return;
    }

    try {
      const response = await axios.put('http://localhost:5000/api/reset-password', { email, newPassword });
      toast.success(response.data.message, { position: 'top-right', autoClose: 3000 });

      setTimeout(() => {
        localStorage.removeItem('token');
        navigate('/login');
      }, 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error resetting password', { position: 'top-right', autoClose: 3000 });
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-cyan-800">Reset Password</h2>
        <form className="space-y-6" onSubmit={handleResetPassword}>
          <div>
            <label className="block text-2xl font-medium text-cyan-800">Email (Read-Only)</label>
            <input
              type="email"
              value={email}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
            />
          </div>
          <div>
            <label className="block text-2xl font-medium text-cyan-800">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
              />
              <button
                type="button"
                className="absolute text-xl right-3 top-4 font-bold text-cyan-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full scale-90 text-2xl bg-green-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 hover:scale-100 transition-transform focus:outline-none"
          >
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ResetPassword;
