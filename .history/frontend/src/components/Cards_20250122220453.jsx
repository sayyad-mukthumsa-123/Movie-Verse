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
      className="movie-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-lg mt-3 mb-2">{movie.title}</h3>
      <p className="text-gray-600">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
    </div>
  );
};

export default Cards;
