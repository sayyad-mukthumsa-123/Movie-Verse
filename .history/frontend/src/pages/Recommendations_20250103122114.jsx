import React, { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`/api/recommendations/${movieId}`);
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    if (movieId) {
      fetchRecommendations();
    }
  }, [movieId]);

  return (
    <div>
      <h3>Recommended Movies</h3>
      <div className="recommendations">
        {recommendations.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
