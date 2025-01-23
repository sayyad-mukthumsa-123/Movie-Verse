import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Rating = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    // Fetch the top 10 ratings for the movie from the API
    const fetchRatings = async () => {
      const response = await fetch(`/api/ratings/${id}`);
      const data = await response.json();
      setRatings(data.ratings); // Set the ratings data
    };
    fetchRatings();
  }, [id]);

  const handleSubmitRating = async (e) => {
    e.preventDefault();
    // Submit the new rating to the database
    await fetch(`/api/ratings/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: newRating }),
    });
    setNewRating(0);
    // Reload ratings after submitting a new one
    const response = await fetch(`/api/ratings/${id}`);
    const data = await response.json();
    setRatings(data.ratings);
  };

  return (
    <div className="rating-page">
      <h1>Rate the Movie</h1>
      <form onSubmit={handleSubmitRating}>
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
          max="5"
          min="1"
          placeholder="Rate (1-5)"
          className="w-full p-2 rounded"
        />
        <button type="submit" className="mt-2 bg-cyan-800 text-white px-4 py-2 rounded">
          Submit Rating
        </button>
      </form>

      <h2 className="mt-4">Top 10 Ratings:</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index} className="mt-2 p-2 border-b">
            <p>Rating: {rating.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
