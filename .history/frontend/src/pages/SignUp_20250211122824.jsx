import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvatarSelection from "../components/AvatarSelection";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    JSON.parse(localStorage.getItem("selectedAvatar")) || undefined
  );
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home_login");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedAvatar) {
      toast.error("Please select an avatar.");
      return;
    }

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
      );
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: username,
          Email: email,
          Password: password,
          ConfirmPassword: confirmPassword,
          Avatar: selectedAvatar,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful!");
        navigate("/home_login");
        
      } else {
        toast.error(data.msg || "Registration failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-2xl mb-2 font-medium text-cyan-800"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-2xl mb-2 font-medium text-cyan-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-2xl px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-2xl mb-2 font-medium text-cyan-800"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-2xl mb-2 font-medium text-cyan-800"
            >
              Confirm Password
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-12 right-3 text-2xl font-semibold text-cyan-800 focus:outline-none"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {/* Avatar Selection */}
          <AvatarSelection setSelectedAvatar={setSelectedAvatar} />
          <div className="text-xl mb-4 text-cyan-800">
            Already have an account?{" "}
            <Link to="/login" className="inline-block mx-2 text-2xl text-blue-500 hover:underline hover:scale-105 transition-transform">
              SignIn
            </Link>
          </div>
          <button
            type="submit"
            className="w-full scale-90 bg-green-800 text-3xl text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none hover:scale-100 transition-transform"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp; 
