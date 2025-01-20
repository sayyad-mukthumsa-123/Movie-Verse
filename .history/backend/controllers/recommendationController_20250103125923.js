const UserSearchHistory = require("../models/UserSearchHistory");
const axios = require("axios");

const API_KEY = process.env.TMDB_API_KEY;

const getRecommendations = async (req, res) => {
  const userId = req.user._id; // Get user ID from middleware
  
  try {
    // Fetch user search history
    const userSearchHistory = await UserSearchHistory.findOne({ userId });

    if (!userSearchHistory || userSearchHistory.searches.length === 0) {
      return res.status(404).json({ msg: "No search history found for this user." });
    }

    // Get the most recent search
    const recentSearch = userSearchHistory.searches[userSearchHistory.searches.length - 1];
    const query = recentSearch.query;

    // Fetch similar movies using TMDB API
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });

    const recommendations = response.data.results;

    return res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).send('Error fetching recommendations');
  }
};

module.exports = { getRecommendations };
