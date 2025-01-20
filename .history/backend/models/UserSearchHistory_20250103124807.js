const mongoose = require("mongoose");

const userSearchHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  searches: [
    {
      movieId: { type: Number, required: true },
      query: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("UserSearchHistory", userSearchHistorySchema);
