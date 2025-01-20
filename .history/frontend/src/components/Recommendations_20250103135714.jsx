import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Related.css'; // Add your custom styles

const RelatedMovies = () => {
  const { query } = useParams(); // Fetch the search query from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState(null); // Store the genre

  // TMDB API Key (Replace with your actual TMDb API key)
  const API_KEY = 'YOUR_TMDB_API_KEY'; 

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const genreResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const genres = genreResponse.data.genres;
        
        // Find genre based on the query
        const genreData = genres.find((g) => g.name.toLowerCase() === query.toLowerCase());
        if (genreData) {
          setGenre(genreData.id); // Set the genre ID
        } else {
          setError('No matching genre found.');
        }
      } catch (err) {
        setError('Failed to fetch genre information.');
        console.error(err);
      }
    };

    if (query) {
      fetchGenre();
    }
  }, [query]);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      if (genre) {
        try {
          setLoading(true);
          const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=en-US`
          );
          setMovies(response.data.results);
        } catch (error) {
          setError('Failed to fetch related movies.');
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMoviesByGenre();
  }, [genre]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

  return (
    <div className="related-movies">
      <h2>Related Movies</h2>
      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200'}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
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
