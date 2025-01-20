import { useEffect, useState } from "react";
import axios from "axios";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recommendations when the component is mounted
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get("/api/recommendations");
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Movie Recommendations</h2>
      {loading ? (
        <p>Loading recommendations...</p>
      ) : (
        <div className="recommendations">
          {recommendations.length > 0 ? (
            recommendations.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </div>
            ))
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
