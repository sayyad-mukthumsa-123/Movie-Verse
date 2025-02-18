// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // // // // import AvatarSelection from "../components/AvatarSelection";

// // // // // // // // const SignUp = () => {
// // // // // // // //   const [username, setUsername] = useState("");
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // // // //   const [passwordVisible, setPasswordVisible] = useState(false);
// // // // // // // //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// // // // // // // //   const [selectedAvatar, setSelectedAvatar] = useState(
// // // // // // // //     JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
// // // // // // // //   );
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   useEffect(() => {
// // // // // // // //     const token = localStorage.getItem("token");
// // // // // // // //     if (token) {
// // // // // // // //       navigate("/home_login");
// // // // // // // //     }
// // // // // // // //   }, [navigate]);

// // // // // // // //   const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
// // // // // // // //   const toggleConfirmPasswordVisibility = () =>
// // // // // // // //     setConfirmPasswordVisible(!confirmPasswordVisible);

// // // // // // // //   const handleSubmit = async (event) => {
// // // // // // // //     event.preventDefault();

// // // // // // // //     if (!selectedAvatar) {
// // // // // // // //       toast.error("Please select an avatar.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     if (!username || !email || !password || !confirmPassword) {
// // // // // // // //       toast.error("Please fill in all fields.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     const passwordRegex =
// // // // // // // //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// // // // // // // //     if (!passwordRegex.test(password)) {
// // // // // // // //       toast.error(
// // // // // // // //         "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
// // // // // // // //       );
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     if (password.trim() !== confirmPassword.trim()) {
// // // // // // // //       toast.error("Passwords do not match.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5000/register", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "application/json",
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify({
// // // // // // // //           Username: username,
// // // // // // // //           Email: email,
// // // // // // // //           Password: password,
// // // // // // // //           ConfirmPassword: confirmPassword,
// // // // // // // //           Avatar: selectedAvatar,
// // // // // // // //         }),
// // // // // // // //       });

// // // // // // // //       const data = await response.json();

// // // // // // // //       if (response.ok) {
// // // // // // // //         toast.success("Registration successful!");
// // // // // // // //         setTimeout(() => {
// // // // // // // //           navigate("/home_login");
// // // // // // // //         }, 2000);


// // // // // // // //       } else {
// // // // // // // //         toast.error(data.msg || "Registration failed.");
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       toast.error("An error occurred. Please try again later.");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // // // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // // // // // // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">
// // // // // // // //           Sign Up
// // // // // // // //         </h1>
// // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label
// // // // // // // //               htmlFor="username"
// // // // // // // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // // // // // // //             >
// // // // // // // //               Username
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               id="username"
// // // // // // // //               className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // // // //               placeholder="Username"
// // // // // // // //               value={username}
// // // // // // // //               onChange={(e) => setUsername(e.target.value)}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //           <div className="mb-4">
// // // // // // // //             <label
// // // // // // // //               htmlFor="email"
// // // // // // // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // // // // // // //             >
// // // // // // // //               Email Address
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type="email"
// // // // // // // //               id="email"
// // // // // // // //               className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // // // //               placeholder="name@example.com"
// // // // // // // //               value={email}
// // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //           <div className="mb-4 relative">
// // // // // // // //             <label
// // // // // // // //               htmlFor="password"
// // // // // // // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // // // // // // //             >
// // // // // // // //               Password
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type={passwordVisible ? "text" : "password"}
// // // // // // // //               id="password"
// // // // // // // //               className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // // // //               placeholder="Password"
// // // // // // // //               value={password}
// // // // // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // // // // //             />
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
// // // // // // // //               onClick={togglePasswordVisibility}
// // // // // // // //             >
// // // // // // // //               {passwordVisible ? "Hide" : "Show"}
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //           <div className="mb-4 relative">
// // // // // // // //             <label
// // // // // // // //               htmlFor="confirmPassword"
// // // // // // // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // // // // // // //             >
// // // // // // // //               Confirm Password
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type={confirmPasswordVisible ? "text" : "password"}
// // // // // // // //               id="confirmPassword"
// // // // // // // //               className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // // // //               placeholder="Confirm Password"
// // // // // // // //               value={confirmPassword}
// // // // // // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // // // // // //             />
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
// // // // // // // //               onClick={toggleConfirmPasswordVisibility}
// // // // // // // //             >
// // // // // // // //               {confirmPasswordVisible ? "Hide" : "Show"}
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //           {/* Avatar Selection */}
// // // // // // // //           <AvatarSelection setSelectedAvatar={setSelectedAvatar} />
// // // // // // // //           <div className="text-xl mb-4 text-cyan-800">
// // // // // // // //             Already have an account?{" "}
// // // // // // // //             <Link to="/login" className="inline-block mx-2 text-2xl text-blue-500 hover:underline hover:scale-105 transition-transform">
// // // // // // // //               SignIn
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //           <button
// // // // // // // //             type="submit"
// // // // // // // //             className="w-full scale-90 bg-green-800 text-3xl text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none hover:scale-100 transition-transform"
// // // // // // // //           >
// // // // // // // //             Sign Up
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //         <ToastContainer />
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SignUp; 


// // // // // // // //img
// // // import React, { useEffect, useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import AvatarSelection from "../components/AvatarSelection";

// // // const SignUp = () => {
// // //   const [username, setUsername] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [passwordVisible, setPasswordVisible] = useState(false);
// // //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// // //   const [selectedAvatar, setSelectedAvatar] = useState(undefined);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     if (token) {
// // //       navigate("/home_login");
// // //     }
// // //   }, [navigate]);

// // //   const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
// // //   const toggleConfirmPasswordVisibility = () =>
// // //     setConfirmPasswordVisible(!confirmPasswordVisible);

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     if (!selectedAvatar) {
// // //       toast.error("Please select an avatar.");
// // //       return;
// // //     }

// // //     if (!username || !email || !password || !confirmPassword) {
// // //       toast.error("Please fill in all fields.");
// // //       return;
// // //     }

// // //     const passwordRegex =
// // //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// // //     if (!passwordRegex.test(password)) {
// // //       toast.error(
// // //         "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
// // //       );
// // //       return;
// // //     }

// // //     if (password.trim() !== confirmPassword.trim()) {
// // //       toast.error("Passwords do not match.");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch("http://localhost:5000/register", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify({
// // //           Username: username,
// // //           Email: email,
// // //           Password: password,
// // //           ConfirmPassword: confirmPassword,
// // //           Avatar: selectedAvatar,
// // //         }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         toast.success("Registration successful!");
// // //         setTimeout(() => {
// // //           navigate("/home_login");
// // //         }, 2000);
// // //       } else {
// // //         toast.error(data.msg || "Registration failed.");
// // //       }
// // //     } catch (error) {
// // //       toast.error("An error occurred. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">
// // //           Sign Up
// // //         </h1>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="mb-4">
// // //             <label
// // //               htmlFor="username"
// // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // //             >
// // //               Username
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="username"
// // //               className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //               placeholder="Username"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label
// // //               htmlFor="email"
// // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // //             >
// // //               Email Address
// // //             </label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //               placeholder="name@example.com"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />
// // //           </div>
// // //           <div className="mb-4 relative">
// // //             <label
// // //               htmlFor="password"
// // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // //             >
// // //               Password
// // //             </label>
// // //             <input
// // //               type={passwordVisible ? "text" : "password"}
// // //               id="password"
// // //               className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //               placeholder="Password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />
// // //             <button
// // //               type="button"
// // //               className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
// // //               onClick={togglePasswordVisibility}
// // //             >
// // //               {passwordVisible ? "Hide" : "Show"}
// // //             </button>
// // //           </div>
// // //           <div className="mb-4 relative">
// // //             <label
// // //               htmlFor="confirmPassword"
// // //               className="block text-2xl mb-2 font-medium text-cyan-800"
// // //             >
// // //               Confirm Password
// // //             </label>
// // //             <input
// // //               type={confirmPasswordVisible ? "text" : "password"}
// // //               id="confirmPassword"
// // //               className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //               placeholder="Confirm Password"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //             />
// // //             <button
// // //               type="button"
// // //               className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
// // //               onClick={toggleConfirmPasswordVisibility}
// // //             >
// // //               {confirmPasswordVisible ? "Hide" : "Show"}
// // //             </button>
// // //           </div>

// // //           <AvatarSelection onSelectAvatar={setSelectedAvatar} />

// // //           <div className="flex justify-center mt-4">
// // //             <button
// // //               type="submit"
// // //               className="px-8 py-2 bg-cyan-800 text-white text-xl font-semibold rounded-lg hover:bg-cyan-700 transition duration-300"
// // //             >
// // //               Sign Up
// // //             </button>
// // //           </div>
// // //         </form>
// // //         <p className="mt-6 text-xl text-center text-cyan-800">
// // //           Already have an account?{" "}
// // //           <Link to="/home_login" className="text-cyan-600 underline">
// // //             Log In
// // //           </Link>
// // //         </p>
// // //         <ToastContainer />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignUp;


// // // // // // //otp
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // // import AvatarSelection from "../components/AvatarSelection";

// // // // // // const SignUp = () => {
// // // // // //   const [username, setUsername] = useState("");
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // //   const [selectedAvatar, setSelectedAvatar] = useState(undefined);
// // // // // //   const [otp, setOtp] = useState(""); 
// // // // // //   const [otpSent, setOtpSent] = useState(false); 
// // // // // //   const [isOtpVerified, setIsOtpVerified] = useState(false); 
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const token = localStorage.getItem("token");
// // // // // //     if (token) {
// // // // // //       navigate("/home_login");
// // // // // //     }
// // // // // //   }, [navigate]);

// // // // // //   const sendOtp = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5000/send-otp", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email }),
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       if (response.ok) {
// // // // // //         toast.success("OTP sent to your email!");
// // // // // //         setOtpSent(true);
// // // // // //       } else {
// // // // // //         toast.error(data.message || "Error sending OTP.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       toast.error("An error occurred. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   const resendOtp = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5000/resend-otp", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email }),
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       if (response.ok) {
// // // // // //         toast.success("New OTP sent to your email!");
// // // // // //       } else {
// // // // // //         toast.error(data.message || "Error resending OTP.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       toast.error("An error occurred. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   const verifyOtp = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5000/verify-otp", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email, otp }),
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       if (response.ok) {
// // // // // //         toast.success("OTP verified successfully!");
// // // // // //         setIsOtpVerified(true);
// // // // // //       } else {
// // // // // //         toast.error(data.message || "Invalid OTP.");
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       toast.error("An error occurred. Please try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // // // // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">
// // // // // //           Sign Up
// // // // // //         </h1>

// // // // // //         <div className="mb-4">
// // // // // //           <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // //             placeholder="name@example.com"
// // // // // //             value={email}
// // // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {otpSent && !isOtpVerified && (
// // // // // //           <>
// // // // // //             <div className="mb-4">
// // // // // //               <label className="block text-2xl font-medium text-cyan-800">Enter OTP</label>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // // // //                 placeholder="OTP"
// // // // // //                 value={otp}
// // // // // //                 onChange={(e) => setOtp(e.target.value)}
// // // // // //               />
// // // // // //             </div>
// // // // // //             <button onClick={verifyOtp} className="px-4 py-2 bg-green-600 text-white rounded-lg">Verify OTP</button>
// // // // // //             <button onClick={resendOtp} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Resend OTP</button>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {!otpSent && (
// // // // // //           <button onClick={sendOtp} className="px-4 py-2 bg-cyan-800 text-white rounded-lg">Send OTP</button>
// // // // // //         )}

// // // // // //         <ToastContainer />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignUp;


// // // // // //otp-2
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // import AvatarSelection from "../components/AvatarSelection";

// // // // // const SignUp = () => {
// // // // //   const [step, setStep] = useState(1);
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [otp, setOtp] = useState("");
// // // // //   const [otpSent, setOtpSent] = useState(false);
// // // // //   const [isOtpVerified, setIsOtpVerified] = useState(false);
// // // // //   const [username, setUsername] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // //   const [selectedAvatar, setSelectedAvatar] = useState(null);
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     if (token) {
// // // // //       navigate("/home_login");
// // // // //     }
// // // // //   }, [navigate]);

// // // // //   const sendOtp = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/send-otp", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email }),
// // // // //       });

// // // // //       const data = await response.json();
// // // // //       if (response.ok) {
// // // // //         toast.success("OTP sent to your email!");
// // // // //         setOtpSent(true);
// // // // //       } else {
// // // // //         toast.error(data.message || "Error sending OTP.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       toast.error("An error occurred. Please try again.");
// // // // //     }
// // // // //   };

// // // // //   const verifyOtp = async () => {
// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/verify-otp", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email, otp }),
// // // // //       });

// // // // //       const data = await response.json();
// // // // //       if (response.ok) {
// // // // //         toast.success("OTP verified successfully!");
// // // // //         setIsOtpVerified(true);
// // // // //         setStep(2);
// // // // //       } else {
// // // // //         toast.error(data.message || "Invalid OTP.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       toast.error("An error occurred. Please try again.");
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (event) => {
// // // // //     event.preventDefault();

// // // // //     if (!selectedAvatar) {
// // // // //       toast.error("Please select an avatar.");
// // // // //       return;
// // // // //     }

// // // // //     if (!username || !password || !confirmPassword) {
// // // // //       toast.error("Please fill in all fields.");
// // // // //       return;
// // // // //     }

// // // // //     if (password !== confirmPassword) {
// // // // //       toast.error("Passwords do not match.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/register", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           username,
// // // // //           email,
// // // // //           password,
// // // // //           avatar: selectedAvatar,
// // // // //         }),
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (response.ok) {
// // // // //         toast.success("Registration successful!");
// // // // //         setTimeout(() => {
// // // // //           navigate("/home_login");
// // // // //         }, 2000);
// // // // //       } else {
// // // // //         toast.error(data.message || "Registration failed.");
// // // // //       }
// // // // //     } catch (error) {
// // // // //       toast.error("An error occurred. Please try again later.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // // // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>
// // // // //         {step === 1 && (
// // // // //           <>
// // // // //             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// // // // //             <button onClick={sendOtp}>Send OTP</button>
// // // // //             {otpSent && (
// // // // //               <>
// // // // //                 <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
// // // // //                 <button onClick={verifyOtp}>Verify OTP</button>
// // // // //               </>
// // // // //             )}
// // // // //           </>
// // // // //         )}
// // // // //         {step === 2 && (
// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
// // // // //             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // // // //             <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
// // // // //             <AvatarSelection onSelectAvatar={setSelectedAvatar} />
// // // // //             <button type="submit">Sign Up</button>
// // // // //           </form>
// // // // //         )}
// // // // //         <ToastContainer />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignUp;


// // // // //otp-css
// // // // import React, { useEffect, useState } from "react";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";
// // // // import AvatarSelection from "../components/AvatarSelection";

// // // // const SignUp = () => {
// // // //   const [step, setStep] = useState(1);
// // // //   const [email, setEmail] = useState("");
// // // //   const [otp, setOtp] = useState("");
// // // //   const [otpSent, setOtpSent] = useState(false);
// // // //   const [isOtpVerified, setIsOtpVerified] = useState(false);
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // //   const [selectedAvatar, setSelectedAvatar] = useState(null);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (token) {
// // // //       navigate("/home_login");
// // // //     }
// // // //   }, [navigate]);

// // // //   const sendOtp = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/send-otp", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email }),
// // // //       });

// // // //       const data = await response.json();
// // // //       if (response.ok) {
// // // //         toast.success("OTP sent to your email!");
// // // //         setOtpSent(true);
// // // //       } else {
// // // //         toast.error(data.message || "Error sending OTP.");
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error("An error occurred. Please try again.");
// // // //     }
// // // //   };

// // // //   const verifyOtp = async () => {
// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/verify-otp", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email, otp }),
// // // //       });

// // // //       const data = await response.json();
// // // //       if (response.ok) {
// // // //         toast.success("OTP verified successfully!");
// // // //         setIsOtpVerified(true);
// // // //         setStep(2);
// // // //       } else {
// // // //         toast.error(data.message || "Invalid OTP.");
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error("An error occurred. Please try again.");
// // // //     }
// // // //   };

// // // //   const handleSubmit = async (event) => {
// // // //     event.preventDefault();

// // // //     if (!selectedAvatar) {
// // // //       toast.error("Please select an avatar.");
// // // //       return;
// // // //     }

// // // //     if (!username || !password || !confirmPassword) {
// // // //       toast.error("Please fill in all fields.");
// // // //       return;
// // // //     }

// // // //     if (password !== confirmPassword) {
// // // //       toast.error("Passwords do not match.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch("http://localhost:5000/register", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           username,
// // // //           email,
// // // //           password,
// // // //           avatar: selectedAvatar,
// // // //         }),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         toast.success("Registration successful!");
// // // //         setTimeout(() => {
// // // //           navigate("/home_login");
// // // //         }, 2000);
// // // //       } else {
// // // //         toast.error(data.message || "Registration failed.");
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error("An error occurred. Please try again later.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>

// // // //         <div className="mb-4">
// // // //           <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
// // // //           <input
// // // //             type="email"
// // // //             className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // //             placeholder="name@example.com"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //           />
// // // //         </div>

// // // //         {step === 1 && !otpSent && (
// // // //           <button
// // // //             onClick={sendOtp}
// // // //             className="px-4 py-2 bg-cyan-800 text-white rounded-lg mt-4"
// // // //           >
// // // //             Send OTP
// // // //           </button>
// // // //         )}

// // // //         {otpSent && !isOtpVerified && (
// // // //           <>
// // // //             <div className="mb-4">
// // // //               <label className="block text-2xl font-medium text-cyan-800">Enter OTP</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // //                 placeholder="OTP"
// // // //                 value={otp}
// // // //                 onChange={(e) => setOtp(e.target.value)}
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               onClick={verifyOtp}
// // // //               className="px-4 py-2 bg-green-600 text-white rounded-lg mr-4"
// // // //             >
// // // //               Verify OTP
// // // //             </button>
// // // //             <button
// // // //               onClick={sendOtp}
// // // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // // //             >
// // // //               Resend OTP
// // // //             </button>
// // // //           </>
// // // //         )}

// // // //         {step === 2 && isOtpVerified && (
// // // //           <form onSubmit={handleSubmit}>
// // // //             <div className="mb-4">
// // // //               <label className="block text-2xl font-medium text-cyan-800">Username</label>
// // // //               <input
// // // //                 type="text"
// // // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // //                 placeholder="Enter username"
// // // //                 value={username}
// // // //                 onChange={(e) => setUsername(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label className="block text-2xl font-medium text-cyan-800">Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // //                 placeholder="Enter password"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label className="block text-2xl font-medium text-cyan-800">Confirm Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // // //                 placeholder="Confirm password"
// // // //                 value={confirmPassword}
// // // //                 onChange={(e) => setConfirmPassword(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <AvatarSelection onSelectAvatar={setSelectedAvatar} />
// // // //             </div>

// // // //             <button
// // // //               type="submit"
// // // //               className="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full"
// // // //             >
// // // //               Sign Up
// // // //             </button>
// // // //           </form>
// // // //         )}

// // // //         <ToastContainer />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignUp;


// // // //otp-err
// // // import React, { useEffect, useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import AvatarSelection from "../components/AvatarSelection"; // Assuming AvatarSelection is a separate component

// // // const SignUp = () => {
// // //   const [step, setStep] = useState(1); // Track which step the user is on
// // //   const [email, setEmail] = useState(""); // User email
// // //   const [otp, setOtp] = useState(""); // OTP entered by the user
// // //   const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP is sent
// // //   const [isOtpVerified, setIsOtpVerified] = useState(false); // Flag to check if OTP is verified
// // //   const [username, setUsername] = useState(""); // Username entered by the user
// // //   const [password, setPassword] = useState(""); // Password entered by the user
// // //   const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password
// // //   const [selectedAvatar, setSelectedAvatar] = useState(null); // Selected avatar by the user
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     if (token) {
// // //       navigate("/home_login"); // Redirect if already logged in
// // //     }
// // //   }, [navigate]);

// // //   // Send OTP to user's email
// // //   const sendOtp = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:5000/send-otp", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email }),
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         toast.success("OTP sent to your email!");
// // //         setOtpSent(true);
// // //       } else {
// // //         toast.error(data.message || "Error sending OTP.");
// // //       }
// // //     } catch (error) {
// // //       toast.error("An error occurred. Please try again.");
// // //     }
// // //   };

// // //   // Verify OTP entered by the user
// // //   const verifyOtp = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:5000/verify-otp", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, otp }),
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         toast.success("OTP verified successfully!");
// // //         setIsOtpVerified(true);
// // //         setStep(2); // Move to next step (username/password)
// // //       } else {
// // //         toast.error(data.message || "Invalid OTP.");
// // //       }
// // //     } catch (error) {
// // //       toast.error("An error occurred. Please try again.");
// // //     }
// // //   };

// // //   // Handle form submission for user registration
// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();

// // //     if (!selectedAvatar) {
// // //       toast.error("Please select an avatar.");
// // //       return;
// // //     }

// // //     if (!username || !password || !confirmPassword) {
// // //       toast.error("Please fill in all fields.");
// // //       return;
// // //     }

// // //     if (password !== confirmPassword) {
// // //       toast.error("Passwords do not match.");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch("http://localhost:5000/register", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           username,
// // //           email,
// // //           password,
// // //           avatar: selectedAvatar, // Include the avatar selected by the user
// // //         }),
// // //       });

// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         toast.success("Registration successful!");
// // //         setTimeout(() => {
// // //           navigate("/home_login"); // Redirect to login page after successful registration
// // //         }, 2000);
// // //       } else {
// // //         toast.error(data.message || "Registration failed.");
// // //       }
// // //     } catch (error) {
// // //       toast.error("An error occurred. Please try again later.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// // //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>

// // //         {/* Step 1: Email Input and OTP Section */}
// // //         <div className="mb-4">
// // //           <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
// // //           <input
// // //             type="email"
// // //             className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //             placeholder="name@example.com"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           />
// // //         </div>

// // //         {step === 1 && !otpSent && (
// // //           <button
// // //             onClick={sendOtp}
// // //             className="px-4 py-2 bg-cyan-800 text-white rounded-lg mt-4"
// // //           >
// // //             Send OTP
// // //           </button>
// // //         )}

// // //         {otpSent && !isOtpVerified && (
// // //           <>
// // //             <div className="mb-4">
// // //               <label className="block text-2xl font-medium text-cyan-800">Enter OTP</label>
// // //               <input
// // //                 type="text"
// // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //                 placeholder="OTP"
// // //                 value={otp}
// // //                 onChange={(e) => setOtp(e.target.value)}
// // //               />
// // //             </div>
// // //             <button
// // //               onClick={verifyOtp}
// // //               className="px-4 py-2 bg-green-600 text-white rounded-lg mr-4"
// // //             >
// // //               Verify OTP
// // //             </button>
// // //             <button
// // //               onClick={sendOtp}
// // //               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// // //             >
// // //               Resend OTP
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* Step 2: Registration Form (Username, Password, Avatar) */}
// // //         {step === 2 && isOtpVerified && (
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="mb-4">
// // //               <label className="block text-2xl font-medium text-cyan-800">Username</label>
// // //               <input
// // //                 type="text"
// // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //                 placeholder="Enter username"
// // //                 value={username}
// // //                 onChange={(e) => setUsername(e.target.value)}
// // //               />
// // //             </div>

// // //             <div className="mb-4">
// // //               <label className="block text-2xl font-medium text-cyan-800">Password</label>
// // //               <input
// // //                 type="password"
// // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //                 placeholder="Enter password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //             </div>

// // //             <div className="mb-4">
// // //               <label className="block text-2xl font-medium text-cyan-800">Confirm Password</label>
// // //               <input
// // //                 type="password"
// // //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// // //                 placeholder="Confirm password"
// // //                 value={confirmPassword}
// // //                 onChange={(e) => setConfirmPassword(e.target.value)}
// // //               />
// // //             </div>

// // //             <div className="mb-4">
// // //               <AvatarSelection onSelectAvatar={setSelectedAvatar} />
// // //             </div>

// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full"
// // //             >
// // //               Sign Up
// // //             </button>
// // //           </form>
// // //         )}

// // //         <ToastContainer />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignUp;


// // //reg-err
// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import AvatarSelection from "../components/AvatarSelection"; // Assuming AvatarSelection is a separate component

// // const SignUp = () => {
// //   const [step, setStep] = useState(1); // Track which step the user is on
// //   const [email, setEmail] = useState(""); // User email
// //   const [otp, setOtp] = useState(""); // OTP entered by the user
// //   const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP is sent
// //   const [isOtpVerified, setIsOtpVerified] = useState(false); // Flag to check if OTP is verified
// //   const [username, setUsername] = useState(""); // Username entered by the user
// //   const [password, setPassword] = useState(""); // Password entered by the user
// //   const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password
// //   const [selectedAvatar, setSelectedAvatar] = useState(null); // Selected avatar by the user
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (token) {
// //       navigate("/home_login"); // Redirect if already logged in
// //     }
// //   }, [navigate]);

// //   // Send OTP to user's email
// //   const sendOtp = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/send-otp", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         toast.success("OTP sent to your email!");
// //         setOtpSent(true);
// //       } else {
// //         toast.error(data.message || "Error sending OTP.");
// //       }
// //     } catch (error) {
// //       toast.error("An error occurred. Please try again.");
// //     }
// //   };

// //   // Verify OTP entered by the user
// //   const verifyOtp = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/verify-otp", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, otp }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         toast.success("OTP verified successfully!");
// //         setIsOtpVerified(true);
// //         setStep(2); // Move to next step (username/password)
// //       } else {
// //         toast.error(data.message || "Invalid OTP.");
// //       }
// //     } catch (error) {
// //       toast.error("An error occurred. Please try again.");
// //     }
// //   };

// //   // Handle form submission for user registration
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!selectedAvatar) {
// //       toast.error("Please select an avatar.");
// //       return;
// //     }

// //     if (!username || !password || !confirmPassword) {
// //       toast.error("Please fill in all fields.");
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       toast.error("Passwords do not match.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:5000/register", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           username,
// //           email,
// //           password,
// //           confirmPassword,
// //           avatar: selectedAvatar, // Include the avatar selected by the user
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         toast.success("Registration successful!");
// //         setTimeout(() => {
// //           navigate("/home_login"); // Redirect to login page after successful registration
// //         }, 2000);
// //       } else {
// //         toast.error(data.message || "Registration failed.");
// //       }
// //     } catch (error) {
// //       toast.error("An error occurred. Please try again later.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
// //         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>

// //         {/* Step 1: Email Input and OTP Section */}
// //         <div className="mb-4">
// //           <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
// //           <input
// //             type="email"
// //             className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// //             placeholder="name@example.com"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>

// //         {step === 1 && !otpSent && (
// //           <button
// //             onClick={sendOtp}
// //             className="px-4 py-2 bg-cyan-800 text-white rounded-lg mt-4"
// //           >
// //             Send OTP
// //           </button>
// //         )}

// //         {otpSent && !isOtpVerified && (
// //           <>
// //             <div className="mb-4">
// //               <label className="block text-2xl font-medium text-cyan-800">Enter OTP</label>
// //               <input
// //                 type="text"
// //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// //                 placeholder="OTP"
// //                 value={otp}
// //                 onChange={(e) => setOtp(e.target.value)}
// //               />
// //             </div>
// //             <button
// //               onClick={verifyOtp}
// //               className="px-4 py-2 bg-green-600 text-white rounded-lg mr-4"
// //             >
// //               Verify OTP
// //             </button>
// //             <button
// //               onClick={sendOtp}
// //               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
// //             >
// //               Resend OTP
// //             </button>
// //           </>
// //         )}

// //         {/* Step 2: Registration Form (Username, Password, Avatar) */}
// //         {step === 2 && isOtpVerified && (
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label className="block text-2xl font-medium text-cyan-800">Username</label>
// //               <input
// //                 type="text"
// //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// //                 placeholder="Enter username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //               />
// //             </div>

// //             <div className="mb-4">
// //               <label className="block text-2xl font-medium text-cyan-800">Password</label>
// //               <input
// //                 type="password"
// //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// //                 placeholder="Enter password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </div>

// //             <div className="mb-4">
// //               <label className="block text-2xl font-medium text-cyan-800">Confirm Password</label>
// //               <input
// //                 type="password"
// //                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
// //                 placeholder="Confirm password"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //               />
// //             </div>

// //             <div className="mb-4">
// //               <AvatarSelection onSelectAvatar={setSelectedAvatar} />
// //             </div>

// //             <button
// //               type="submit"
// //               className="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full"
// //             >
// //               Sign Up
// //             </button>
// //           </form>
// //         )}

// //         <ToastContainer />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;


// //reg-err-2
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import AvatarSelection from "../components/AvatarSelection"; // Assuming AvatarSelection is a separate component

// const SignUp = () => {
//   const [step, setStep] = useState(1); // Track which step the user is on
//   const [email, setEmail] = useState(""); // User email
//   const [otp, setOtp] = useState(""); // OTP entered by the user
//   const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP is sent
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // Flag to check if OTP is verified
//   const [username, setUsername] = useState(""); // Username entered by the user
//   const [password, setPassword] = useState(""); // Password entered by the user
//   const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password
//   const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Confirm password visibility toggle
//   const [selectedAvatar, setSelectedAvatar] = useState(null); // Selected avatar by the user
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/home_login"); // Redirect if already logged in
//     }
//   }, [navigate]);

//   // Send OTP to user's email
//   const sendOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success("OTP sent to your email!");
//         setOtpSent(true);
//       } else {
//         toast.error(data.message || "Error sending OTP.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   // Verify OTP entered by the user
//   const verifyOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         toast.success("OTP verified successfully!");
//         setIsOtpVerified(true);
//         setStep(2); // Move to next step (username/password)
//       } else {
//         toast.error(data.message || "Invalid OTP.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   // Handle form submission for user registration
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!selectedAvatar) {
//       toast.error("Please select an avatar.");
//       return;
//     }

//     if (!username || !password || !confirmPassword) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//           confirmPassword,
//           avatar: selectedAvatar, // Include the avatar selected by the user
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Registration successful!");
//         setTimeout(() => {
//           navigate("/home_login"); // Redirect to login page after successful registration
//         }, 2000);
//       } else {
//         toast.error(data.message || "Registration failed.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again later.");
//     }
//   };

//   // Toggle password visibility
//   const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

//   // Toggle confirm password visibility
//   const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>

//         {/* Step 1: Email Input and OTP Section */}
//         <div className="mb-4">
//           <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
//           <input
//             type="email"
//             className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//             placeholder="name@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         {step === 1 && !otpSent && (
//           <button
//             onClick={sendOtp}
//             className="px-4 py-2 bg-cyan-800 text-white rounded-lg mt-4"
//           >
//             Send OTP
//           </button>
//         )}

//         {otpSent && !isOtpVerified && (
//           <>
//             <div className="mb-4">
//               <label className="block text-2xl font-medium text-cyan-800">Enter OTP</label>
//               <input
//                 type="text"
//                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//                 placeholder="OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//             </div>
//             <button
//               onClick={verifyOtp}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg mr-4"
//             >
//               Verify OTP
//             </button>
//             <button
//               onClick={sendOtp}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Resend OTP
//             </button>
//           </>
//         )}

//         {/* Step 2: Registration Form (Username, Password, Avatar) */}
//         {step === 2 && isOtpVerified && (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-2xl font-medium text-cyan-800">Username</label>
//               <input
//                 type="text"
//                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className="mb-4 relative">
//               <label className="block text-2xl font-medium text-cyan-800">Password</label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? "Hide" : "Show"}
//               </button>
//             </div>

//             <div className="mb-4 relative">
//               <label className="block text-2xl font-medium text-cyan-800">Confirm Password</label>
//               <input
//                 type={confirmPasswordVisible ? "text" : "password"}
//                 className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
//                 onClick={toggleConfirmPasswordVisibility}
//               >
//                 {confirmPasswordVisible ? "Hide" : "Show"}
//               </button>
//             </div>

//             <div className="mb-4">
//               <AvatarSelection onSelectAvatar={setSelectedAvatar} />
//             </div>

//             <button
//               type="submit"
//               className="px-4 py-2 bg-cyan-800 text-white rounded-lg w-full"
//             >
//               Sign Up
//             </button>
//           </form>
//         )}

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default SignUp;


//otp-email-check
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing the icons for the toggle
import AvatarSelection from "../components/AvatarSelection"; // Assuming AvatarSelection is a separate component

const SignUp = () => {
  const [step, setStep] = useState(1); // Track which step the user is on
  const [email, setEmail] = useState(""); // User email
  const [otp, setOtp] = useState(""); // OTP entered by the user
  const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP is sent
  const [isOtpVerified, setIsOtpVerified] = useState(false); // Flag to check if OTP is verified
  const [username, setUsername] = useState(""); // Username entered by the user
  const [password, setPassword] = useState(""); // Password entered by the user
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password
  const [passwordVisible, setPasswordVisible] = useState(false); // Password visibility toggle
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Confirm password visibility toggle
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Selected avatar by the user
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home_login"); // Redirect if already logged in
    }
  }, [navigate]);

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,4}$/;
    return regex.test(email);
  };

  // Send OTP to user's email
  const sendOtp = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP sent to your email!");
        setOtpSent(true);
      } else {
        toast.error(data.message || "Error sending OTP.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };


  // Verify OTP entered by the user
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP verified successfully!");
        setIsOtpVerified(true);
        setStep(2); // Move to next step (username/password)
      } else {
        toast.error(data.message || "Invalid OTP.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  // Handle form submission for user registration
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedAvatar) {
      toast.error("Please select an avatar.");
      return;
    }

    if (!username || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          avatar: selectedAvatar, // Include the avatar selected by the user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/home_login"); // Redirect to login page after successful registration
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Sign Up</h1>

        {/* Step 1: Email Input and OTP Section */}
        <div className="mb-4">
          <label className="block text-2xl font-medium text-cyan-800">Email Address</label>
          <input
            type="email"
            className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {step === 1 && !otpSent && (
          <button
            onClick={sendOtp}
            className="bg-cyan-800 hover:bg-cyan-700 text-white text-xl py-2 px-4 rounded-lg w-full"
          >
            Send OTP
          </button>
        )}

        {otpSent && !isOtpVerified && (
          <div className="mb-4">
            <label className="block text-xl font-medium text-cyan-800">Enter OTP</label>
            <input
              type="text"
              className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="bg-cyan-800 hover:bg-cyan-700 text-white text-xl py-2 px-4 rounded-lg w-full mt-4"
            >
              Verify OTP
            </button>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-cyan-800 text-lg">
                Already have an account? Login
              </Link>
            </div>
          </div>

        )}


        {/* Step 2: Username and Password Section */}
        {isOtpVerified && step === 2 && (
          <>
            <div className="mb-4">
              <label className="block text-2xl font-medium text-cyan-800">Username</label>
              <input
                type="text"
                className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-2xl font-medium text-cyan-800">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-10 text-cyan-800"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mb-4 relative">
              <label className="block text-2xl font-medium text-cyan-800">Confirm Password</label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-4 top-10 text-cyan-800"
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Avatar Selection */}
            <AvatarSelection onSelectAvatar={setSelectedAvatar} />

            <button
              onClick={handleSubmit}
              className="bg-cyan-800 hover:bg-cyan-700 text-white text-xl py-2 px-4 rounded-lg w-full"
            >
              Register
            </button>
          </>
        )}


      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
