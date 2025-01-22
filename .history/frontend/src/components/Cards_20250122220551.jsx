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
      className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
      onClick={() => onClick(movie.id)}
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{movie.title}</h3>
      <p className="text-gray-600">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
    </div>
  );
};

export default Cards;
