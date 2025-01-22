// import React from 'react';
// // import '../Styles/Cards.css';

// const Cards = ({ movie, onClick }) => {
//   return (
//     <div className="movie-card" onClick={() => onClick(movie.id)}>
//       <img
//         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
//         alt={movie.title}
//       />
//       <h3>{movie.title}</h3>
//       <p>{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
//     </div>
//   );
// };

// export default Cards;


//css-res
import React from 'react';

const Cards = ({ movie, onClick }) => {
  return (
    <div
      className="movie-card bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-45% md:w-23% mx-auto text-center"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="rounded-lg max-w-full h-auto"
      />
      <h3 className="text-lg mt-4">{movie.title}</h3>
      <p className="text-gray-600">
        {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
      </p>
    </div>
  );
};

export default Cards;
