// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../Styles/Related.css'; // Create this CSS file for styling

// const RelatedMovies = () => {
//   const { directorId } = useParams(); // Assuming you pass directorId in the URL
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const apiKey = process.env.TMDB_API_KEY;

//   useEffect(() => {
//     // Fetch related movies by director
//     const fetchRelatedMovies = async () => {
//       try {
//         const response = await axios.get(`https://api.themoviedb.org/3/person/${directorId}/movie_credits?api_key=${apiKey}`);
//         setMovies(response.data.crew); // The 'crew' array contains the director's movies
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch related movies');
//         setLoading(false);
//       }
//     };

//     fetchRelatedMovies();
//   }, [directorId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="related-movies">
//       <h2>Movies by This Director</h2>
//       <div className="movie-list">
//         {movies.length === 0 ? (
//           <p>No related movies found.</p>
//         ) : (
//           movies.map((movie) => (
//             <div key={movie.id} className="movie-card">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-poster"
//               />
//               <h3>{movie.title}</h3>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default RelatedMovies;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/DirectorMovies.css';

const DirectorMovies = () => {
  const { movieName } = useParams();
  const [director, setDirector] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.TMDB_API_KEY;  // Replace with your TMDB API key

  // Fetch movie details and director's name
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie data using the movie name
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
        );
        const movieId = movieResponse.data.results[0]?.id;

        if (movieId) {
          // Fetch movie credits to get the director's name
          const creditsResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
          );
          const directorData = creditsResponse.data.crew.find(
            (person) => person.job === 'Director'
          );
          
          if (directorData) {
            setDirector(directorData.name);
          }
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieName, apiKey]);

  // Fetch movies by the director
  useEffect(() => {
    if (director) {
      const fetchMoviesByDirector = async () => {
        try {
          const directorMoviesResponse = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${director}`
          );
          setMovies(directorMoviesResponse.data.results);
        } catch (error) {
          console.error('Error fetching movies by director:', error);
        }
      };

      fetchMoviesByDirector();
    }
  }, [director, apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="director-movies">
      <h1>Movies Directed by {director}</h1>
      {movies.length > 0 ? (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No related movies found.</p>
      )}
    </div>
  );
};

export default DirectorMovies;
