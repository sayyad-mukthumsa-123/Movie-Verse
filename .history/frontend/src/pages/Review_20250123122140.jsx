import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id: movieId } = useParams(); // Extract movieId from URL params
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    // Fetch existing reviews for the movie
    fetch(`http://localhost:5000/api/reviews/${movieId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [movieId]);

  const handleReviewSubmit = async () => {
    if (!newReview.trim()) {
      alert("Review cannot be empty.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Token missing, please login again.");
        return;
      }
console.log(newReview);

      // Send the review
      const response = await axios.post(
        `http://localhost:5000/api/reviews/${movieId}`,
        { review: newReview.trim() },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach the token to the request
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to submit review");
      }

      setNewReview(""); // Reset the review input

      // Fetch updated reviews after submitting
      const updatedReviews = await fetch(`http://localhost:5000/api/reviews/${movieId}`).then((res) =>
        res.json()
      );
      setReviews(updatedReviews);
    } catch (err) {
      console.error("Error submitting review:", err.message);
      alert(err.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <h1>Write a Review for Movie {movieId}</h1>
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
