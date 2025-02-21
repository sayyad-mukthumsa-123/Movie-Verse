import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000000]  to-[#0d0a2c]">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-extrabold mb-4 text-cyan-400">MovieVerse</h1>
                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    Welcome to MovieVerse! Sign in or sign up to explore our movie universe.
                    Discover your next favorite film in an expansive universe of movie content. MovieVerse brings you the latest releases and timeless classics all in one place.
                </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                    <button className="px-6 py-3 text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300">
                        Sign In
                    </button>
                </Link>
                <Link to="/register">
                    <button className="px-6 py-3 text-lg font-medium text-cyan-400 border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-gray-900 transition duration-300">
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;

