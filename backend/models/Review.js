const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: { type: String, required: true }, // TMDB Movie ID
  username: { type: String, required: true }, // Store username for easy retrieval
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
