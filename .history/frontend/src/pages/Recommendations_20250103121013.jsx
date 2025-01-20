import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ directorName }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const recommendationsResponse = await axios.get(`/api/recommendations/director/${directorName}`);
        setRecommendations(recommendationsResponse.data);
      } catch (err) {
        console.error('Error fetching recommendations:', err);
      }
    };

    if (directorName) {
      fetchRecommendations();
    }
  }, [directorName]);

  return (
    <div className="recommendations-section">
      <h2>Recommendations</h2>
      <div className="recommended-movies">
        {recommendations.map((recMovie) => (
          <div key={recMovie.id} className="recommended-movie">
            <img
              src={`https://image.tmdb.org/t/p/w200${recMovie.poster_path}`}
              alt={recMovie.title}
            />
            <p>{recMovie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
