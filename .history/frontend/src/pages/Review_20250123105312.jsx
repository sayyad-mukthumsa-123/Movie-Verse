import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch top 10 reviews from the database
    fetch(`/api/movies/${id}/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  const handleReviewSubmit = () => {
    // Submit review to the database
    fetch(`/api/movies/${id}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review: newReview }),
    }).then(() => {
      setNewReview('');
      // Refresh reviews
      fetch(`/api/movies/${id}/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data));
    });
  };

  return (
    <div>
      <h1>Write a Review for Movie {id}</h1>
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write your review here..."
        className="w-full p-2 border rounded"
      />
      <button onClick={handleReviewSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Submit Review
      </button>
      <h2>Top 10 Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
