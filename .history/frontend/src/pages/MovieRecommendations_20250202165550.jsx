// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MovieRecommendations = ({ movieId }) => {
//     const [recommendations, setRecommendations] = useState([]);

//     useEffect(() => {
//         if (movieId) {
//             axios.get(`http://localhost:5000/recommendations/${movieId}`)
//                 .then(response => setRecommendations(response.data))
//                 .catch(error => console.error("Error fetching recommendations:", error));
//         }
//     }, [movieId]);

//     return (
//         <div>
//             <h2>Recommended Movies</h2>
//             <div className="movie-grid">
//                 {recommendations.map(movie => (
//                     <div key={movie.id} className="movie-card">
//                         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//                         <h3>{movie.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MovieRecommendations;


import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieRecommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) {
      setError('Invalid movie ID');
      return;
    }

    const fetchRecommendations = async () => {
      try {
        console.log('Fetching recommendations for movieId:', movieId);
        //const response = await axios.get(`http://localhost:5000/api/recommendations?movieId=${movieId}`);
        const response = await axios.get(`http://localhost:5000/api/recommendations/${movieId}`);

        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setError('Failed to fetch recommendations. Please try again later.');
      }
    };

    fetchRecommendations();
  }, [movieId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2>Recommended Movies</h2>
      <ul>
        {recommendations.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendations;
