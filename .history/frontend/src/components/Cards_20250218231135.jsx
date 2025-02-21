import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const Cards = ({ movie }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleReviewClick = (e) => {
    e.stopPropagation(); // Prevent parent div click event
    // Navigate to the review page for the specific movie
    navigate(`/movie/${movie.id}/review-rating`);
  };

  return (
    <div
      className="bg-slate-50 p-4 rounded-lg shadow-lg outline-red-400 cursor-pointer hover:outline-white hover:scale-105 hover:shadow-xl transition-transform duration-300"
      onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to the movie details page
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-11/12 rounded-lg"
      />
      {/* Movie Title */}
      <h3 className="text-2xl text-cyan-800 font-bold mt-3 break-words">
        {movie.title}
      </h3>
      {/* Release Year */}
      <p className="text-cyan-800 text-xl">
        {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
      </p>

      {/* Button for Review and Rating */}
      <button
        onClick={handleReviewClick}
        className="mt-3 bg-cyan-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-700"
      >
        Review & Rating
      </button>
    </div>
  );
};

export default Cards;
