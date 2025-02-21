import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AvatarSelection from "../components/AvatarSelection"; 

const SignUp = () => {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState(""); 
  const [otp, setOtp] = useState(""); 
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); 
  const [selectedAvatar, setSelectedAvatar] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    /////see once
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
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-lg bg-slate-50 rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-black text-center mb-6">Sign Up</h1>

        {/* Step 1: Email Input and OTP Section */}
        <div className="mb-4">
          <label className="block text-2xl font-medium text-black">Email Address</label>
          <input
            type="email"
            className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-black"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {step === 1 && !otpSent && (
          <>
            <button
              onClick={sendOtp}
              className="bg-white hover:bg-cyan-700 text-cyan-700 outline text-xl py-2 px-4 rounded-lg w-full"
            >
              Send OTP
            </button>

            <div className="mt-4 text-center">
              <Link to="/login" className="text-cyan-800 text-lg">
                Already have an account? Login
              </Link>
            </div>
          </>
        )}

        {otpSent && !isOtpVerified && (
          <>
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
            </div>

            <div className="mt-4 text-center">
              <Link to="/login" className="text-cyan-800 text-lg">
                Already have an account? Login
              </Link>
            </div>
          </>
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
