import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.TMDB_API_KEY; // Ensure this is in your .env file
  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = new URLSearchParams(location.search).get('query');
  const movieId = new URLSearchParams(location.search).get('movieId'); // Get movieId from query parameter

  useEffect(() => {
    if (movieId) {
      // Fetch related movies based on movieId
      const fetchRecommendations = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
            params: {
              api_key: API_KEY,
              language: 'en-US',
            },
          });
          setRecommendedMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching related movies:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchRecommendations();
    } else if (searchQuery) {
      // Search for a movie based on the search query
      const fetchMovieId = async () => {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: API_KEY,
              query: searchQuery,
              language: 'en-US',
            },
          });
          if (response.data.results.length > 0) {
            const movie = response.data.results[0]; // Get the first movie from search results
            navigate(`/recommendations?movieId=${movie.id}`); // Redirect to related movies page
          }
        } catch (error) {
          console.error('Error fetching movie for search:', error);
        }
      };
      fetchMovieId();
    }
  }, [searchQuery, movieId, API_KEY, navigate]);

  return (
    <div className="recommendations-page">
      <h2>Related Movies</h2>
      {loading ? (
        <p>Loading related movies...</p>
      ) : (
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
                <p>{movie.overview}</p>
              </div>
            ))
          ) : (
            <p>No related movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
