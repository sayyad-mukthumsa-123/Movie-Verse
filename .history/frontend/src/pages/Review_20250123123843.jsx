// pages/Review.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
  const { id } = useParams();
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`/api/reviews/${id}`);
        setReviews(res.data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, [id]);

  const handleReviewSubmit = async () => {
    try {
      await axios.post(`http:localhost:5000/api/reviews/${id}`, { reviewText });
      setReviewText('');
      alert('Review submitted successfully');
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <div>
      <h1>Write a Review</h1>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here"
        rows="5"
        cols="50"
      />
      <button onClick={handleReviewSubmit}>Submit Review</button>

      <h2>Top 10 Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
