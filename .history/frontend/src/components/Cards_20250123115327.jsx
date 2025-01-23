// // import React from 'react';
// // // import '../Styles/Cards.css';

// // const Cards = ({ movie, onClick }) => {
// //   return (
// //     <div className="movie-card" onClick={() => onClick(movie.id)}>
// //       <img
// //         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
// //         alt={movie.title}
// //       />
// //       <h3>{movie.title}</h3>
// //       <p>{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
// //     </div>
// //   );
// // };

// // export default Cards;


// //css-res
// import React from 'react';

// const Cards = ({ movie, onClick }) => {
  
//   return (
//     <div
//       className="bg-gray-100   p-4 rounded-lg shadow-lg outline-none cursor-pointer  hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
//       onClick={() => onClick(movie.id)}
//     >
//       <img
//         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
//         alt={movie.title}
//         className="w-full h-11/12 rounded-lg"
//       />
//       <h3 className="text-2xl text-cyan-800 font-bold mt-3">{movie.title}</h3>
//       <p className="text-cyan-800 text-xl">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
//     </div>
//   );
// };

// export default Cards;


//rr
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ movie, onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-lg outline-none cursor-pointer hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
        alt={movie.title}
        className="w-full h-11/12 rounded-lg"
      />
      <h3 className="text-2xl text-cyan-800 font-bold mt-3">{movie.title}</h3>
      <p className="text-cyan-800 text-xl">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
      
      {/* Review and Rating Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
          onClick={() => navigate(`/api/reviews/${movie.id}`)}
        >
          Review
        </button>
        <button
          className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
          onClick={() => navigate(`/api/ratings/${movie.id}`)}
        >
          Rating
        </button>
      </div>
    </div>
  );
};

export default Cards;
