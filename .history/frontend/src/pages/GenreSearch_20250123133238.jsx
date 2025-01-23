import React from 'react';

const Cards = ({ movie, onClick }) => {
  return (
    <div
      className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg outline-none cursor-pointer hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'https://via.placeholder.com/300x450'}
        alt={movie.title}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-lg md:text-xl lg:text-2xl text-cyan-800 font-bold mt-3 truncate">
        {movie.title}
      </h3>
      <p className="text-cyan-800 text-sm md:text-base lg:text-lg">
        {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
      </p>
    </div>
  );
};

export default Cards;
