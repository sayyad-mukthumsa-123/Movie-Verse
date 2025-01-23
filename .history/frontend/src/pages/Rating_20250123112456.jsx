import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Rating = () => {
  const { id } = useParams();
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/ratings/${id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, [id]);

  const handleRatingSubmit = async () => {
    if (!newRating || newRating < 1 || newRating > 10) {
      alert("Please provide a rating between 1 and 10.");
      return;
    }

    await fetch(`http://localhost:5000/api/ratings/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token
      },
      body: JSON.stringify({ rating: newRating }),
    });

    setNewRating("");
    fetch(`/api/ratings/${id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data));
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
