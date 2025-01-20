import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Styles/Related.css'; // Create this CSS file for styling

const RelatedMovies = () => {
  const { directorId } = useParams(); // Assuming you pass directorId in the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key

  useEffect(() => {
    // Fetch related movies by director
    const fetchRelatedMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${directorId}/movie_credits?api_key=${apiKey}`);
        setMovies(response.data.crew); // The 'crew' array contains the director's movies
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch related movies');
        setLoading(false);
      }
    };

    fetchRelatedMovies();
  }, [directorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="related-movies">
      <h2>Movies by This Director</h2>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No related movies found.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedMovies;
