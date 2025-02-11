// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';
// import Cards from '../components/Cards';
// // import "../Styles/HeroSearch.css";

// const HeroSearch = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const tmdbApiKey = process.env.REACT_APP_API_KEY;
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve search data from session storage
//     const storedQuery = sessionStorage.getItem('searchQuery');
//     const storedMovies = sessionStorage.getItem('searchMovies');

//     if (storedQuery) {
//       setQuery(storedQuery);
//     }
//     if (storedMovies) {
//       setMovies(JSON.parse(storedMovies));
//     }
//   }, []);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/person?api_key=${tmdbApiKey}&query=${query}`
//       );

//       if (response.data.results.length > 0) {
//         const actorId = response.data.results[0].id;

//         const movieResponse = await axios.get(
//           `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${tmdbApiKey}`
//         );

//         const filteredMovies = movieResponse.data.cast.filter(movie => movie.character && movie.character.length > 0);

//         setMovies(filteredMovies);
//         // Store search data in session storage
//         sessionStorage.setItem('searchQuery', query);
//         sessionStorage.setItem('searchMovies', JSON.stringify(filteredMovies));
//       } else {
//         setMovies([]);
//         setError('No actors found with that name.');
//         // Clear search data from session storage
//         sessionStorage.removeItem('searchQuery');
//         sessionStorage.removeItem('searchMovies');
//       }
//     } catch (err) {
//       setError('An error occurred while searching for movies.');
//       setMovies([]);
//       // Clear search data from session storage
//       sessionStorage.removeItem('searchQuery');
//       sessionStorage.removeItem('searchMovies');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCardClick = (movieId) => {
//     navigate(`/movie/${movieId}`);
//   };

//   return (
//     <div className="search-movies-by-actor-container">
//       <h1 className="text-center">Search By Hero</h1>
//       <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} placeholder={"Enter hero name"} />
//       {loading && <p className="loading-message">Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {!loading && !error && movies.length === 0 && <p id="alt-text">No movies found. Try searching for another hero!</p>}
//       {movies.length > 0 && (
//         <ul className="movie-list">
//           {movies.map((movie) => (
//             <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HeroSearch;

//css
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

const HeroSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuery = sessionStorage.getItem('searchQuery');
    const storedMovies = sessionStorage.getItem('searchMovies');

    if (storedQuery) {
      setQuery(storedQuery);
    }
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (query.trim() === '') {
      setError('Please enter a hero name');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_URL}/search/person`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });

      const personId = response.data.results[0]?.id;

      if (personId) {
        const movieResponse = await axios.get(`${API_URL}/person/${personId}/movie_credits`, {
          params: { api_key: API_KEY },
        });

        const filteredMovies = movieResponse.data.cast.filter((movie) => movie.character && movie.character.length > 0);

        setMovies(filteredMovies);
        sessionStorage.setItem('searchQuery', query);
        sessionStorage.setItem('searchMovies', JSON.stringify(filteredMovies));
      } else {
        setError('Hero not found');
        setMovies([]);
        sessionStorage.removeItem('searchQuery');
        sessionStorage.removeItem('searchMovies');
      }
    } catch (err) {
      setError('An error occurred while searching for movies.');
      setMovies([]);
      sessionStorage.removeItem('searchQuery');
      sessionStorage.removeItem('searchMovies');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-cyan-800 text-center mb-8">Search By Hero</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        placeholder={"Enter hero name"}
      />
      {loading && <p className="text-xl text-gray-700 mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-lg mt-4">{error}</p>}
      <div className="w-full p-4 mt-8">
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-lg text-gray-600 text-center mt-4">
              No movies found. Try searching for another hero!
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default HeroSearch;
