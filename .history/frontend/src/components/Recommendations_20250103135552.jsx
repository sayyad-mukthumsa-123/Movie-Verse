import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Related.css'; // Add your custom styles

const RelatedMovies = () => {
  const { genre } = useParams(); // Fetch the genre from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedMoviesByGenre = async () => {
      try {
        setLoading(true);
        // Replace with your actual API's endpoint and update query to use the genre
        const response = await axios.get(`https://api.example.com/movies?genre=${genre}`);

        console.log(response.data); // Log the full response to check its structure

        // Check if the response contains movies
        if (response.data && response.data.movies && response.data.movies.length > 0) {
          setMovies(response.data.movies);
        } else {
          setError('No related movies found for this genre.');
        }
      } catch (error) {
        setError('Failed to fetch related movies');
        console.error(error); // Log the error to the console for debugging
      } finally {
        setLoading(false);
      }
    };

    if (genre) {
      fetchRelatedMoviesByGenre();
    }
  }, [genre]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="related-movies">
      <h2>Related Movies - Genre: {genre}</h2>
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
          <p>No related movies found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedMovies;
