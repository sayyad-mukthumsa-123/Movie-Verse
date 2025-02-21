import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MovieRecommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate 

  useEffect(() => {
    if (!movieId) {
      setError('Invalid movie ID');
      return;
    }

    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

        if (response.data && response.data.length) {
          setRecommendations(response.data);
        } else {
          setError('No recommendations found.');
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Failed to fetch recommendations. Please try again later.');
      }
    };

    fetchRecommendations();
  }, [movieId]);
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [recommendations]);

  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  // Handle movie click and navigate to MovieDetail page
  const handleMovieClick = (movieId) => {
    navigate(`/details/${movieId}`); // Navigate to the movie details page
  };

  return (
    <div className="p-4">
      {/* <h2 className="text-4xl text-slate-50 font-bold mb-4 text-center">Recommended Movies</h2> */}
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recommendations.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer"
            // onClick={() => handleMovieClick(movie.id)} // Handle click to navigate
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <p className="text-white text-lg truncate">{movie.title}</p>
            <p className="text-gray-400 text-sm">{movie.overview.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendations;
