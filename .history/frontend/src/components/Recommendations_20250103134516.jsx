import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const API_KEY = process.env.TMDB_API_KEY; // Ensure this is in your .env file
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get('query');
  const movieId = new URLSearchParams(location.search).get('movieId'); // Assuming you pass movieId as query parameter

  useEffect(() => {
    if (movieId) {
      // Fetch similar movies based on movieId
      const fetchRecommendations = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
            params: {
              api_key: API_KEY,
            },
          });
          setRecommendedMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };
      fetchRecommendations();
    } else if (searchQuery) {
      // Search for a movie first and fetch its ID
      const fetchMovieId = async () => {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: API_KEY,
              query: searchQuery,
            },
          });
          if (response.data.results.length > 0) {
            const movie = response.data.results[0]; // Pick the first movie from search results
            history.push(`/recommendations?movieId=${movie.id}`);
          }
        } catch (error) {
          console.error('Error fetching movie for search:', error);
        }
      };
      fetchMovieId();
    }
  }, [searchQuery, movieId, API_KEY, history]);

  return (
    <div className="recommendations-page">
      <h2>Related Movies</h2>
      <div className="recommended-movies">
        {recommendedMovies.length > 0 ? (
          recommendedMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>Loading related movies...</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
