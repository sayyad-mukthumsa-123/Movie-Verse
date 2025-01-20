import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Related.css'; // Add your custom styles

const RelatedMovies = () => {
  const { query } = useParams(); // Fetch the search query from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedMovies = async () => {
      try {
        setLoading(true);
        // Example API URL - replace with your actual API endpoint
        const response = await axios.get(`https://api.example.com/search?q=${query}`);
        
        console.log(response.data); // Log the full response to check its structure

        // Check if the response contains movies
        if (response.data && response.data.movies && response.data.movies.length > 0) {
          setMovies(response.data.movies);
        } else {
          setError('No related movies found.');
        }
      } catch (error) {
        setError('Failed to fetch related movies');
        console.error(error); // Log the error to the console for debugging
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchRelatedMovies();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="related-movies">
      <h2>Related Movies</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster ? movie.poster : 'https://via.placeholder.com/200'}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No related movies found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedMovies;
