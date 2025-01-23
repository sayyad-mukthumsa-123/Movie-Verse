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


//use cards
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards'; // Import the Cards component

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=70&with_original_language=te&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=300&with_original_language=hi&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=150&with_original_language=en&page=1`),
        ]);

        const [teluguData, hindiData, englishData] = await Promise.all([
          teluguResponse.json(),
          hindiResponse.json(),
          englishResponse.json(),
        ]);

        const teluguMovies = teluguData.results.slice(0, 20);
        const hindiMovies = hindiData.results.slice(0, 20);
        const englishMovies = englishData.results.slice(0, 20);

        const allMovies = [...hindiMovies, ...teluguMovies, ...englishMovies];

        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-cyan-800 text-center mb-8">Popular Movies</h1>
      <div className="w-full max-w-screen-lg">
        {movies.length === 0 ? (
          <p className="text-xl text-gray-700 text-center">Loading movies...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
