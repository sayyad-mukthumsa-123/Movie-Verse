import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ movie }) => {
  const navigate = useNavigate();

  const handleReviewClick = (e) => {
    e.stopPropagation();
    navigate(`/movie/${movie.id}/review-rating`);
  };

  return (
    <div
      className="bg-slate-50 p-4 rounded-lg outline-none cursor-pointer hover:scale-105 transition-all h-full flex flex-col"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-60 object-cover rounded-lg"
      />
      {/* Content Wrapper */}
      <div className="flex flex-col flex-grow justify-between mt-3">
        <div>
          {/* Movie Title */}
          <h3 className="text-2xl text-cyan-800 font-bold break-words">
            {movie.title}
          </h3>
          {/* Release Year */}
          <p className="text-cyan-800 text-xl">
            {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
          </p>
        </div>
        {/* Button for Review and Rating */}
        <button
          onClick={handleReviewClick}
          className="mt-3 text-cyan-700 outline py-2 px-4 rounded-lg hover:bg-cyan-700 hover:text-white transition-all"
        >
          Review & Rating
        </button>
      </div>
    </div>
  );
};

export default Cards;
