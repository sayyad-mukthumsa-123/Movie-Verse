import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = ({ searchQuery }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const API_KEY = process.env.TMDB_API_KEY; // Ensure this is in your .env file

  useEffect(() => {
    if (searchQuery) {
      const fetchRecommendations = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: API_KEY,
              query: searchQuery,
            },
          });
          setRecommendedMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      };
      fetchRecommendations();
    }
  }, [searchQuery, API_KEY]);

  return (
    <div className="recommendations-page">
      <h2>Recommended Movies for "{searchQuery}"</h2>
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
          <p>Loading recommended movies...</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
