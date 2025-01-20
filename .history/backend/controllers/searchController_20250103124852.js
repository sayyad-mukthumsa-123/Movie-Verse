const UserSearchHistory = require("../models/UserSearchHistory");

const searchMovie = async (req, res) => {
  const userId = req.user._id; // Get user ID from middleware
  const query = req.params.query;

  try {
    // Fetch data from TMDB API
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: query,
      },
    });

    // Save the search query to the user's search history
    await UserSearchHistory.findOneAndUpdate(
      { userId },
      { $push: { searches: { movieId: response.data.results[0].id, query } } },
      { upsert: true }
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching movie search data');
  }
};

module.exports = { searchMovie };
