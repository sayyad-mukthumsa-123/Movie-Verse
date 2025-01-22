import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
// import "../Styles/MovieSearch.css";


const Movie = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const tmdbApiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve stored data if available
    const storedQuery = sessionStorage.getItem('searchQuery');
    const storedMovies = sessionStorage.getItem('searchMovies');

    if (storedQuery) {
      setQuery(storedQuery);
    }
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${query}&language=en-US`);
      if (response.data.results.length > 0) {
        const filteredMovies = response.data.results.filter(movie => movie.poster_path && movie.title.toLowerCase().includes(query.toLowerCase()));
        if (filteredMovies.length > 0) {
          setMovies(filteredMovies);
          // Store the query and results in sessionStorage
          sessionStorage.setItem('searchQuery', query);
          sessionStorage.setItem('searchMovies', JSON.stringify(filteredMovies));
        } else {
          setError('No movies found with matching criteria.');
          setMovies([]);
          sessionStorage.removeItem('searchQuery');
          sessionStorage.removeItem('searchMovies');
        }
      } else {
        setError('No movies found.');
        setMovies([]);
        sessionStorage.removeItem('searchQuery');
        sessionStorage.removeItem('searchMovies');
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
      setMovies([]);
      sessionStorage.removeItem('searchQuery');
      sessionStorage.removeItem('searchMovies');
    } finally {
      setLoading(false);
    }
  };

  // Handle click event to navigate to the movie details page
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="movie-search-container">
      <h1 className="text-center">Search Movies</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} placeholder={"Enter a movie"} />

      {loading && <p id="alt-text">Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      <div className="movie-results mt-4">
        {movies.length > 0 ? (
          <ul className="list-group">
            {movies.map((movie) => (
              <Cards key={movie.id} movie={movie} onClick={handleMovieClick} />
            ))}
          </ul>
        ) : (
          !loading && <p id="alt-text">No movies found. Try searching for another movie!</p>
        )}
      </div>
    </div>
  );
};

export default Movie;
