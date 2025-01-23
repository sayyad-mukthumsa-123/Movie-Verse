// pages/Rating.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Rating = () => {
  const { id } = useParams();
  const [rating, setRating] = useState('');
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await axios.get(`/api/ratings/${id}`);
        setRatings(res.data);
      } catch (err) {
        console.error('Error fetching ratings:', err);
      }
    };

    fetchRatings();
  }, [id]);

  const handleRatingSubmit = async () => {
    try {
      await axios.post(`/api/ratings/${id}`, { rating });
      setRating('');
      alert('Rating submitted successfully');
    } catch (err) {
      console.error('Error submitting rating:', err);
    }
  };

  return (
    <div>
      <h1>Rate the Movie</h1>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Select Rating</option>
        {[1, 2, 3, 4, 5].map((star) => (
          <option key={star} value={star}>
            {star}
          </option>
        ))}
      </select>
      <button onClick={handleRatingSubmit}>Submit Rating</button>

      <h2>Top 10 Ratings</h2>
      <ul>
        {ratings.map((rating) => (
          <li key={rating._id}>
            <p>{rating.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
