// // // import React from 'react';
// // // // import '../Styles/Cards.css';

// // // const Cards = ({ movie, onClick }) => {
// // //   return (
// // //     <div className="movie-card" onClick={() => onClick(movie.id)}>
// // //       <img
// // //         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
// // //         alt={movie.title}
// // //       />
// // //       <h3>{movie.title}</h3>
// // //       <p>{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
// // //     </div>
// // //   );
// // // };

// // // export default Cards;


// // //css-res
// // import React from 'react';

// // const Cards = ({ movie, onClick }) => {
  
// //   return (
// //     <div
// //       className="bg-gray-100   p-4 rounded-lg shadow-lg outline-none cursor-pointer  hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
// //       onClick={() => onClick(movie.id)}
// //     >
// //       <img
// //         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
// //         alt={movie.title}
// //         className="w-full h-11/12 rounded-lg"
// //       />
// //       <h3 className="text-2xl text-cyan-800 font-bold mt-3">{movie.title}</h3>
// //       <p className="text-cyan-800 text-xl">{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p>
// //     </div>
// //   );
// // };

// // export default Cards;

// //err
// import React from 'react';

// const Cards = ({ movie, onClick }) => {
//   return (
//     <div
//       className="bg-gray-100 p-4 rounded-lg shadow-lg outline-none cursor-pointer hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
//       onClick={() => onClick(movie.id)}
//     >
//       <img
//         src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
//         alt={movie.title}
//         className="w-full h-11/12 rounded-lg"
//       />
//       {/* Movie Title */}
//       <h3 className="text-2xl text-cyan-800 font-bold mt-3 break-words">
//         {movie.title}
//       </h3>
//       {/* Release Year */}
//       <p className="text-cyan-800 text-xl">
//         {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
//       </p>
//     </div>
//   );
// };

// export default Cards;


//r-r
import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const Cards = ({ movie }) => {
  const history = useHistory(); // Initialize useHistory hook for navigation

  const handleReviewClick = () => {
    // Navigate to the review page for the specific movie
    history.push(`/movie/${movie.id}/review-rating`);
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg shadow-lg outline-none cursor-pointer hover:outline-cyan-800 hover:scale-105 hover:shadow-xl transition-transform duration-300"
      onClick={() => history.push(`/movie/${movie.id}`)} // Navigate to the movie details page
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
