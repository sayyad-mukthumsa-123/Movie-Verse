// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Cards from '../components/Cards';
// // import '../Styles/TrendingMovies.css';

// const TrendingMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const tmdbApiKey =process.env.REACT_APP_API_KEY;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         let allMovies = [];
//         const languages = ['en', 'hi', 'ten'];

//         for (const lang of languages) {
//           const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&language=en-US&with_original_language=${lang}&sort_by=popularity.desc&page=1`);
//           if (response.data.results) {
//             allMovies = [...allMovies, ...response.data.results];
//           } else {
//             console.error(`Error fetching ${lang} movies: `, response.data.status_message);
//           }
//         }

//         // Remove duplicate movies based on their ID
//         const uniqueMovies = Array.from(new Map(allMovies.map(movie => [movie.id, movie])).values());

//         setMovies(uniqueMovies);
//       } catch (error) {
//         console.error("There was an error fetching the movies!", error);
//       }
//     };

//     fetchMovies();
//   }, [tmdbApiKey]);

//   const handleMovieClick = (id) => {
//     navigate(`/movie/${id}`); // Navigate to the MovieDetail page with movie ID
//   };

//   return (
//     <>
//       <h1 id='title'>Trending Movies</h1>
//       <div className="movies-container">
//         {movies.map(movie => (
//           <Cards
//             key={movie.id} // Use movie.id for TMDb
//             movie={movie}
//             onClick={handleMovieClick}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default TrendingMovies;

//css
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const tmdbApiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let allMovies = [];
        const languages = ['en', 'hi', 'ten'];

        for (const lang of languages) {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&language=en-US&with_original_language=${lang}&sort_by=popularity.desc&page=1`);
          if (response.data.results) {
            allMovies = [...allMovies, ...response.data.results];
          } else {
            console.error(`Error fetching ${lang} movies: `, response.data.status_message);
          }
        }

        // Remove duplicate movies based on their ID
        const uniqueMovies = Array.from(new Map(allMovies.map(movie => [movie.id, movie])).values());

        setMovies(uniqueMovies);
      } catch (error) {
        console.error("There was an error fetching the movies!", error);
      }
    };

    fetchMovies();
  }, [tmdbApiKey]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the MovieDetail page with movie ID
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-cyan-800 mb-8">Trending Movies</h1>
      <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {movies.map(movie => (
          <Cards
            key={movie.id}
            movie={movie}
            onClick={handleMovieClick}
          />
        ))}
      </div>
    </>
  );
};

export default TrendingMovies;
