// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import '../Styles/PopularMovies.css';

// // const PopularMovies = () => {
// //   const [movies, setMovies] = useState([]);
// //   const navigate = useNavigate();
// //   const apiKey = process.env.REACT_APP_API_KEY;

// //   useEffect(() => {
// //     const fetchMovies = async () => {
// //       try {
// //         const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=70&with_original_language=te&page=1`),
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=300&with_original_language=hi&page=1`),
// //           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=150&with_original_language=en&page=1`),
// //         ]);

// //         const [teluguData, hindiData, englishData] = await Promise.all([
// //           teluguResponse.json(),
// //           hindiResponse.json(),
// //           englishResponse.json(),
// //         ]);

// //         // Limit each language's results to 20 movies
// //         const teluguMovies = teluguData.results.slice(0, 20);
// //         const hindiMovies = hindiData.results.slice(0, 20);
// //         const englishMovies = englishData.results.slice(0, 20);

// //         // Combine all movies
// //         const allMovies = [
// //           ...hindiMovies,
// //           ...teluguMovies,
// //           ...englishMovies,
// //         ];

// //         setMovies(allMovies); // Set all movies
// //       } catch (error) {
// //         console.error('Error fetching movies:', error);
// //         setMovies([]); // Set to empty array on error
// //       }
// //     };

// //     fetchMovies();
// //   }, [apiKey]);

// //   const handleMovieClick = (id) => {
// //     navigate(`/movie/${id}`); // Navigate to the MovieDetail page with movie ID
// //   };

// //   return (
// //     <>
// //       <h1 id='title'>Popular Movies</h1>
// //       <div className="movies-container">
// //         {movies.length === 0 ? (
// //           <p>Loading movies...</p>
// //         ) : (
// //           movies.map(movie => (
// //             <div
// //               key={movie.id} // Use movie.id for TMDb
// //               className="movie-card"
// //               onClick={() => handleMovieClick(movie.id)}
// //             >
// //               <img
// //                 src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
// //                 alt={movie.title}
// //               />
// //               <h3>{movie.title}</h3>
// //               <p>{movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}</p> {/* Display only the year */}
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default PopularMovies;

// //css
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PopularMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const navigate = useNavigate();
//   const apiKey = process.env.REACT_APP_API_KEY;

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const [teluguResponse, hindiResponse, englishResponse] = await Promise.all([
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=70&with_original_language=te&page=1`),
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=300&with_original_language=hi&page=1`),
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.asc&vote_count.gte=150&with_original_language=en&page=1`),
//         ]);

//         const [teluguData, hindiData, englishData] = await Promise.all([
//           teluguResponse.json(),
//           hindiResponse.json(),
//           englishResponse.json(),
//         ]);

//         const teluguMovies = teluguData.results.slice(0, 20);
//         const hindiMovies = hindiData.results.slice(0, 20);
//         const englishMovies = englishData.results.slice(0, 20);

//         const allMovies = [...hindiMovies, ...teluguMovies, ...englishMovies];

//         setMovies(allMovies);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setMovies([]);
//       }
//     };

//     fetchMovies();
//   }, [apiKey]);

//   const handleMovieClick = (id) => {
//     navigate(`/movie/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-bold text-cyan-800 text-center mb-8">Popular Movies</h1>
//       <div className="w-full max-w-screen-lg">
//         {movies.length === 0 ? (
//           <p className="text-xl text-gray-700 text-center">Loading movies...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {movies.map((movie) => (
//               <div
//                 key={movie.id}
//                 className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
//                 onClick={() => handleMovieClick(movie.id)}
//               >
//                 <img
//                   src={
//                     movie.poster_path
//                       ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
//                       : 'https://via.placeholder.com/200'
//                   }
//                   alt={movie.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
//                   <p className="text-gray-600">
//                     {movie.release_date ? movie.release_date.split('-')[0] : 'Unknown Year'}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopularMovies;

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
        const englishMovies = englishData.results.slice(0, 21);

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
