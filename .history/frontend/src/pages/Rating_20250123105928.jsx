import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Rating = () => {
  const { id } = useParams();
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    // Fetch top 10 ratings from the database
    fetch(`/api/ratings/${id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, [id]);

  const handleRatingSubmit = () => {
    // Submit rating to the database
    fetch(`/api/ratings/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: newRating }),
    }).then(() => {
      setNewRating(0);
      // Refresh ratings
      fetch(`/api/ratings/${id}`)
        .then((res) => res.json())
        .then((data) => setRatings(data));
    });
  };

  return (
    <div>
      <h1>Rate Movie {id}</h1>
      <input
        type="number"
        min="1"
        max="10"
        value={newRating}
        onChange={(e) => setNewRating(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button onClick={handleRatingSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Submit Rating
      </button>
      <h2>Top 10 Ratings</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>{rating.rating}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
