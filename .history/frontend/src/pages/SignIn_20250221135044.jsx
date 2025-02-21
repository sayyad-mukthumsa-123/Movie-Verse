import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from '../assets/auth.jpg';
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams();
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
        localStorage.setItem("userId", data.userId);
        toast.success("Sign in successful!");
        setTimeout(() => {
          navigate("/home_login");
        }, 2000);
        
      } else {
        toast.error(data.msg || "Invalid email or password.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email to reset the password.");
      return;
    }
  
    try {
      // Request user ID from the backend using the email
      const response = await fetch("http://localhost:5000/get-user-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigate(`/reset-password/${data.userId}`);
      } else {
        toast.error(data.msg || "User not found. Please enter a valid email.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen  bg-slate-900 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-full max-w-md bg-slate-50 text-black rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold  text-center mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-2xl mb-2 font-medium ">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline text-2xl"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block  mb-2 font-medium  text-2xl">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="mt-1 w-full px-4 py-2 text-black border rounded-lg focus:outline text-2xl"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute text-black top-14 right-3 text-2xl font-semibold  focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="text-sm text-right mb-4">
            <button
              type="button"
              className="text-cyan-700 text-xl hover:underline focus:outline-none hover:scale-105 transition-transform"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-xl mb-4 text-cyan-700">
            Don't have an account?{" "}
            <Link to="/register" className="inline-block mx-2 text-cyan-700 hover:underline hover:scale-105 transition-transform text-2xl">
              SignUp
            </Link>
          </div>
          <button
            type="submit"
            className="w-full   text-3xl text-cyan-500 py-2 px-4 rounded-lg hover:bg-cyan-700 hover:text-white  transition-transform outline focus:outline-none"

          >
            Sign In
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;


