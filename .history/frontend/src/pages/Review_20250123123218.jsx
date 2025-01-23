import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch the top 10 reviews for the movie from the API
    const fetchReviews = async () => {
      const response = await fetch(`/api/reviews/${id}`);
      const data = await response.json();
      setReviews(data.reviews); // Set the reviews data
    };
    fetchReviews();
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Submit the new review to the database
    await fetch(`/api/reviews/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review: newReview }),
    });
    setNewReview('');
    // Reload reviews after submitting a new one
    const response = await fetch(`/api/reviews/${id}`);
    const data = await response.json();
    setReviews(data.reviews);
  };

  return (
    <div className="review-page">
      <h1>Write a Review</h1>
      <form onSubmit={handleSubmitReview}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 rounded"
        />
        <button type="submit" className="mt-2 bg-cyan-800 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>

      <h2 className="mt-4">Top 10 Reviews:</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="mt-2 p-2 border-b">
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
