import React from 'react';
// import '../Styles/Cards.css';

const Cards = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
    </div>
  );
};

export default Cards;
