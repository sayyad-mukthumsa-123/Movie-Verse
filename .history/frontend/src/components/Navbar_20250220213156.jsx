import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'; // Import the LogoutButton component

const Navbar = ({ onPopularClick, onTrendingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Assuming email is stored in localStorage after user login
  const userEmail = localStorage.getItem('email'); // Retrieve user's email (adjust as per your setup)

  

  return (
    <nav className="bg-cyan-950  text-slate-50 p-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          {/* Hamburger Icon for small screens */}
          <button 
            className="text-white sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`sm:flex ${isMenuOpen ? 'flex-col space-y-4' : 'hidden'} sm:block sm:flex-row sm:space-y-0 sm:space-x-10`}>
          <Link 
            to="/popular" 
            onClick={onPopularClick} 
            className=" text-2xl sm:text-3xl font-semibold hover:text-cyan-500  hover:scale-110 transition-transform duration-300"
          >
            Popular
          </Link>
          <Link 
            to="/trending" 
            onClick={onTrendingClick} 
            className=" text-2xl sm:text-3xl font-semibold hover:text-cyan-500  hover:scale-110 transition-transform duration-300"
          >
            Trending
          </Link>
          <Link 
            to="/search" 
            className=" text-2xl sm:text-3xl font-semibold hover:text-cyan-500  hover:scale-110 transition-transform duration-300"
          >
            Search
          </Link>
          {/* Profile Link */}
          {userEmail && (
            <Link 
              to={`../api/profile/${userEmail}`} 
              className="text-2xl sm:text-3xl font-semibold hover:text-gradient-to-r from-white via-cyan-200 to-cyan-500 hover:scale-110 transition-transform duration-300"
              
            >
              Profile
            </Link>
          )}
        </div>

        {/* Logout Button */}
        <div className="hidden sm:block">
          <Logout /> {/* Use the new LogoutButton component */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
