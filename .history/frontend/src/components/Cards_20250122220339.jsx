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
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
      </div>
    </div>
  );
};

export default Cards;
