import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Related.css'; // Add your custom styles

const RelatedMovies = () => {
  const { query } = useParams(); // Fetch the search query from the URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [director, setDirector] = useState(null);

  const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // For fetching movie posters

  useEffect(() => {
    const fetchDirectorMovies = async () => {
      try {
        setLoading(true);
        
        // Step 1: Search for the director by name
        const directorSearchResponse = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}&language=en-US`
        );
        
        if (directorSearchResponse.data.results.length === 0) {
          setError('Director not found.');
          setLoading(false);
          return;
        }
        
        const directorData = directorSearchResponse.data.results[0]; // Assuming the first result is the director
        setDirector(directorData);

        // Step 2: Fetch movies for the director using their ID
        const moviesResponse = await axios.get(
          `https://api.themoviedb.org/3/person/${directorData.id}/movie_credits?api_key=${API_KEY}&language=en-US`
        );

        setMovies(moviesResponse.data.cast); // The movies the director has worked on
      } catch (error) {
        setError('Failed to fetch related movies');
        console.error(error); // Log the error to the console for debugging
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchDirectorMovies();
    }
  }, [query]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

  return (
    <div className="related-movies">
      <h2>Movies by Director: {director ? director.name : 'Loading...'}</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/200'}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
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
