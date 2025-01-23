const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
