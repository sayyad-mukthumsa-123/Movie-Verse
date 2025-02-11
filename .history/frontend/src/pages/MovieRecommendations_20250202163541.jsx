import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieRecommendations = ({ movieId }) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (movieId) {
            axios.get(`http://localhost:5000/recommendations/${movieId}`)
                .then(response => setRecommendations(response.data))
                .catch(error => console.error("Error fetching recommendations:", error));
        }
    }, [movieId]);

    return (
        <div>
            <h2>Recommended Movies</h2>
            <div className="movie-grid">
                {recommendations.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieRecommendations;
