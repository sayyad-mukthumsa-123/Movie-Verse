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
        // Ensure your API endpoint is correct
        const response = await axios.get(`https://api.example.com/search?q=${query}`);
        
        // Log the response to check the structure
        console.log(response);

        if (response.data && response.data.movies) {
          setMovies(response.data.movies);
        } else {
          setError('No movies found in the response.');
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
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              {/* Ensure the movie poster URL is valid */}
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
