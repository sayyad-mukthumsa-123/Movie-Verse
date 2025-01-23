// // // import React, { useState } from 'react';
// // // import Button from 'react-bootstrap/Button';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import "../Styles/Login.css";

// // // const Login = () => {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const [passwordVisible, setPasswordVisible] = useState(false);
// // //     const navigate = useNavigate();

// // //     const togglePasswordVisibility = () => {
// // //         setPasswordVisible(!passwordVisible);
// // //     };

// // //     const handleSubmit = async (event) => {
// // //         event.preventDefault();

// // //         if (!email || !password) {
// // //             toast.error('Please fill in all fields.');
// // //             return;
// // //         }

// // //         if (!/\S+@\S+\.\S+/.test(email)) {
// // //             toast.error('Please provide a valid email.');
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch('http://localhost:5000/login',
// // //             // const response = await fetch('https://movieverse-backend.onrender.com/login',
// // //                 {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify({ Email: email, Password: password }),
// // //             });

// // //             const data = await response.json();

// // //             if (response.ok) {
// // //                 console.log('Sign in successful:', data);
// // //                 localStorage.setItem('token', data.token); // Save token to local storage
// // //                 navigate('/home_login');
// // //                 toast.success('Sign in successful!');
// // //             } else {
// // //                 toast.error(data.msg || 'Invalid email or password.');
// // //             }
// // //         } catch (error) {
// // //             toast.error('An error occurred. Please try again later.');
// // //             console.error('Error:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="container">
// // //             <div className="row">
// // //                 <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
// // //                     <div className="card border-0 shadow rounded-3 my-5">
// // //                         <div className="card-body p-4 p-sm-5">
// // //                             <h1 className="card-title text-center mb-5">Sign In</h1>
// // //                             <form onSubmit={handleSubmit}>
// // //                                 <div className="form-floating mb-3">
// // //                                     <input
// // //                                         type="email"
// // //                                         className="form-control"
// // //                                         id="floatingInput"
// // //                                         placeholder="name@example.com"
// // //                                         value={email}
// // //                                         onChange={(e) => setEmail(e.target.value)}
// // //                                     />
// // //                                     <label htmlFor="floatingInput">Email address</label>
// // //                                 </div>
// // //                                 <div className="form-floating mb-3 position-relative">
// // //                                     <input
// // //                                         type={passwordVisible ? "text" : "password"}
// // //                                         className="form-control"
// // //                                         id="floatingPassword"
// // //                                         placeholder="Password"
// // //                                         value={password}
// // //                                         onChange={(e) => setPassword(e.target.value)}
// // //                                     />
// // //                                     <label htmlFor="floatingPassword">Password</label>
// // //                                     <button
// // //                                         type="button"
// // //                                         className="btn position-absolute top-50 end-0 translate-middle-y"
// // //                                         onClick={togglePasswordVisibility}
// // //                                         style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
// // //                                     >
// // //                                         {passwordVisible ? 'Hide' : 'Show'}
// // //                                     </button>
// // //                                 </div>
// // //                                 <span>
// // //                                     Don't have an account?
// // //                                     <Link to="/register" className='link-signup'>
// // //                                         Sign Up
// // //                                     </Link>
// // //                                 </span>
// // //                                 <div className="d-grid">
// // //                                     <Button variant="outline-info" className='submit' type="submit">Sign In</Button>
// // //                                 </div>
// // //                             </form>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //             <ToastContainer />
// // //         </div>
// // //     );
// // // };

// // // export default Login;



// // // //for route only after auth



// // import React, { useEffect, useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import { Link, useNavigate } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // // import "../Styles/Login.css";

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       navigate("/home_login"); // Redirect if already logged in
// //     }
// //   }, [navigate]);

// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible(!passwordVisible);
// //   };

// //   // const handleSubmit = async (event) => {
// //   //   event.preventDefault();

// //   //   if (!email || !password) {
// //   //     toast.error('Please fill in all fields.');
// //   //     return;
// //   //   }

// //   //   if (!/\S+@\S+\.\S+/.test(email)) {
// //   //     toast.error('Please provide a valid email.');
// //   //     return;
// //   //   }

// //   //   try {
// //   //     const response = await fetch('http://localhost:5000/login', {
// //   //       method: 'POST',
// //   //       headers: {
// //   //         'Content-Type': 'application/json',
// //   //       },
// //   //       body: JSON.stringify({ Email: email, Password: password }),
// //   //     });

// //   //     const data = await response.json();

// //   //     if (response.ok) {
// //   //       console.log('Sign in successful:', data);
// //   //       localStorage.setItem('token', data.token); // Save token to local storage
// //   //       navigate('/home_login');
// //   //       toast.success('Sign in successful!');
// //   //     } else {
// //   //       toast.error(data.msg || 'Invalid email or password.');
// //   //     }
// //   //   } catch (error) {
// //   //     toast.error('An error occurred. Please try again later.');
// //   //     console.error('Error:', error);
// //   //   }
// //   // };


// //   ////profile-get
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!email || !password) {
// //       toast.error('Please fill in all fields.');
// //       return;
// //     }

// //     if (!/\S+@\S+\.\S+/.test(email)) {
// //       toast.error('Please provide a valid email.');
// //       return;
// //     }

// //     try {
// //       const response = await fetch('http://localhost:5000/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ Email: email, Password: password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         console.log('Sign in successful:', data);

// //         // Save token and email to localStorage
// //         localStorage.setItem('token', data.token); 
// //         localStorage.setItem('email', email); // Save email to localStorage

// //         navigate('/home_login');
// //         toast.success('Sign in successful!');
// //       } else {
// //         toast.error(data.msg || 'Invalid email or password.');
// //       }
// //     } catch (error) {
// //       toast.error('An error occurred. Please try again later.');
// //       console.error('Error:', error);
// //     }
// //   };

// //   /////
// //   return (
// //     <div className="container">
// //       <div className="row">
// //         <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
// //           <div className="card border-0 shadow rounded-3 my-5">
// //             <div className="card-body p-4 p-sm-5">
// //               <h1 className="card-title text-center mb-5">Sign In</h1>
// //               <form onSubmit={handleSubmit}>
// //                 <div className="form-floating mb-3">
// //                   <input
// //                     type="email"
// //                     className="form-control"
// //                     id="floatingInput"
// //                     placeholder="name@example.com"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   />
// //                   <label htmlFor="floatingInput">Email address</label>
// //                 </div>
// //                 <div className="form-floating mb-3 position-relative">
// //                   <input
// //                     type={passwordVisible ? "text" : "password"}
// //                     className="form-control"
// //                     id="floatingPassword"
// //                     placeholder="Password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                   />
// //                   <label htmlFor="floatingPassword">Password</label>
// //                   <button
// //                     type="button"
// //                     className="btn position-absolute top-50 end-0 translate-middle-y"
// //                     onClick={togglePasswordVisibility}
// //                     style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
// //                   >
// //                     {passwordVisible ? 'Hide' : 'Show'}
// //                   </button>
// //                 </div>
// //                 <span>
// //                   Don't have an account?
// //                   <Link to="/register" className="link-signup">Sign Up</Link>
// //                 </span>
// //                 <div className="d-grid">
// //                   <Button variant="outline-info" className="submit" type="submit">Sign In</Button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default Login;


// //css
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/home_login"); // Redirect if already logged in
//     }
//   }, [navigate]);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       toast.error("Please provide a valid email.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ Email: email, Password: password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("email", email);
//         navigate("/home_login");
//         toast.success("Sign in successful!");
//       } else {
//         toast.error(data.msg || "Invalid email or password.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again later.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-2xl mb-2 font-medium text-cyan-800">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4 relative">
//             <label htmlFor="password" className="block text-2xl mb-2 font-medium text-cyan-800">
//               Password
//             </label>
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               className="absolute  top-11 right-3  text-xl text-cyan-800  focus:outline-none"
//               onClick={togglePasswordVisibility}
//             >
//               {passwordVisible ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="text-sm text-right mb-4">
//             <button
//               type="button"
//               className="text-blue-500 hover:underline focus:outline-none"
//               onClick={() => navigate(`/reset-password/${email}`)}
//             >
//               Forgot Password?
//             </button>

//           </div>
//           <div className="text-sm mb-4">
//             Don't have an account?{" "}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Sign Up
//             </Link>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;


//forget-pwd
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home_login"); // Redirect if already logged in
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please provide a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        navigate("/home_login");
        toast.success("Sign in successful!");
      } else {
        toast.error(data.msg || "Invalid email or password.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email to reset the password.");
      return;
    }
    navigate(`/reset-password/${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-2xl mb-2 font-medium text-cyan-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-2xl mb-2 font-medium text-cyan-800">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-12 right-3 text-xl font-semibold text-cyan-800 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="text-sm text-right mb-4">
            <button
              type="button"
              className="text-blue-500 text-xl hover:underline focus:outline-none hover:scale-105 transition-transform"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-xl mb-4 text-cyan-800">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
          <button
            type="submit"
            className="w-11/12 bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none hover:scale-110"
          >
            Sign In
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;


//forget pwd not working with alredy defined component 
//create new forgot password component
