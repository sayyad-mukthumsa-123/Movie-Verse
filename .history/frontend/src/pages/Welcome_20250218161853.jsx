import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[linear-gradient(216deg,_rgba(77,77,77,0.05)_0%,_rgba(77,77,77,0.05)_25%,_rgba(42,42,42,0.05)_25%,_rgba(42,42,42,0.05)_38%,_rgba(223,223,223,0.05)_38%,_rgba(223,223,223,0.05)_75%,_rgba(36,36,36,0.05)_75%,_rgba(36,36,36,0.05)_100%),linear-gradient(44deg,_rgba(128,128,128,0.05)_0%,_rgba(128,128,128,0.05)_34%,_rgba(212,212,212,0.05)_34%,_rgba(212,212,212,0.05)_57%,_rgba(25,25,25,0.05)_57%,_rgba(25,25,25,0.05)_89%,_rgba(135,135,135,0.05)_89%,_rgba(135,135,135,0.05)_100%),linear-gradient(241deg,_rgba(55,55,55,0.05)_0%,_rgba(55,55,55,0.05)_14%,_rgba(209,209,209,0.05)_14%,_rgba(209,209,209,0.05)_60%,_rgba(245,245,245,0.05)_60%,_rgba(245,245,245,0.05)_69%,_rgba(164,164,164,0.05)_69%,_rgba(164,164,164,0.05)_100%),linear-gradient(249deg,_rgba(248,248,248,0.05)_0%,_rgba(248,248,248,0.05)_32%,_rgba(148,148,148,0.05)_32%,_rgba(148,148,148,0.05)_35%,_rgba(202,202,202,0.05)_35%,_rgba(202,202,202,0.05)_51%,_rgba(181,181,181,0.05)_51%,_rgba(181,181,181,0.05)_100%),linear-gradient(92deg,_hsl(214,0%,11%),_hsl(214,0%,11%))]">
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

