// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const ResetPassword = () => {
// //   const [email, setEmail] = useState('');
// //   const [newPassword, setNewPassword] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleResetPassword = async (e) => {
// //     e.preventDefault();

// //     if (!email || !newPassword) {
// //       setMessage('Please fill all fields');
// //       return;
// //     }

// //     try {
// //       const response = await axios.put( // Use PUT instead of POST
// //         'http://localhost:5000/api/reset-password',
// //         { email, newPassword }
// //       );
// //       setMessage(response.data.message);
// //     } catch (error) {
// //       setMessage(error.response?.data?.message || 'Error resetting password');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Reset Password</h2>
// //       <form onSubmit={handleResetPassword}>
// //         <div>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>New Password:</label>
// //           <input
// //             type="password"
// //             value={newPassword}
// //             onChange={(e) => setNewPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Reset Password</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default ResetPassword;


// //css-res
// import React, { useState } from 'react';
// import axios from 'axios';

// const ResetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!email || !newPassword) {
//       setMessage('Please fill all fields');
//       return;
//     }

//     try {
//       const response = await axios.put( // Use PUT instead of POST
//         'http://localhost:5000/api/reset-password',
//         { email, newPassword }
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Error resetting password');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold text-center text-cyan-800">Reset Password</h2>
//         <form className="space-y-6" onSubmit={handleResetPassword}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">New Password</label>
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-cyan-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//           >
//             Reset Password
//           </button>
//         </form>
//         {message && <p className="text-center text-red-500 mt-4">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


//navigate to login,etc
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { email } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email || !newPassword) {
      toast.error('Please fill all fields', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (newPassword.length < 8) {
      toast.error('Password must be at least 8 characters long', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error(
        'Password must contain at least one capital letter, one small letter, one number, and one special symbol',
        {
          position: 'top-right',
          autoClose: 3000,
        }
      );
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:5000/api/reset-password',
        { email, newPassword }
      );
      toast.success(response.data.message, {
        position: 'top-right',
        autoClose: 3000,
      });
      setTimeout(() => {
        // Redirect to login page after success
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error resetting password', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-cyan-800">Reset Password</h2>
        <form className="space-y-6" onSubmit={handleResetPassword}>
          <div>
            <label className="block text-lg font-medium text-cyan-800  ">Email</label>
            <input
              type="email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-cyan-800 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-cyan-800">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-cyan-800 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              />
              <button
                type="button"
                className="absolute right-3 top-2 font-bold text-cyan-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full scale-90 text-xl bg-green-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-800  hover:scale-100 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 "
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


//reset pwd is happening with other user email instead of current user
//get email from params and make email field read-only