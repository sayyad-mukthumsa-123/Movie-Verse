const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
