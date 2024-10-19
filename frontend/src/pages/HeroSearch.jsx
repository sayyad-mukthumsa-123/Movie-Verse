import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import "../Styles/HeroSearch.css";

const HeroSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const tmdbApiKey = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve search data from session storage
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

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${tmdbApiKey}&query=${query}`
      );

      if (response.data.results.length > 0) {
        const actorId = response.data.results[0].id;

        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${tmdbApiKey}`
        );

        const filteredMovies = movieResponse.data.cast.filter(movie => movie.character && movie.character.length > 0);

        setMovies(filteredMovies);
        // Store search data in session storage
        sessionStorage.setItem('searchQuery', query);
        sessionStorage.setItem('searchMovies', JSON.stringify(filteredMovies));
      } else {
        setMovies([]);
        setError('No actors found with that name.');
        // Clear search data from session storage
        sessionStorage.removeItem('searchQuery');
        sessionStorage.removeItem('searchMovies');
      }
    } catch (err) {
      setError('An error occurred while searching for movies.');
      setMovies([]);
      // Clear search data from session storage
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
    <div className="search-movies-by-actor-container">
      <h1 className="text-center">Search By Hero</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} placeholder={"Enter hero name"} />
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && movies.length === 0 && <p id="alt-text">No movies found. Try searching for another hero!</p>}
      {movies.length > 0 && (
        <ul className="movie-list">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} onClick={handleCardClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroSearch;
