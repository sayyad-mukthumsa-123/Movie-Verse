const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const argon2 = require("argon2");
const bcrypt = require("bcryptjs");
const UserModel = require("./models/usermodel");
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const resetPasswordController = require("./controllers/resetPasswordController");
const reviewRoutes = require('./routes/reviews');
const natural = require("natural");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Middleware to authenticate the user via token
const middleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "Access denied, token missing!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ msg: "Invalid token" });
  }
};

// Database connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.error("Database connection error:", err));

// Routes
app.post("/register", Register);
app.post("/login", Login);




app.get("/api/profile/:email", async (req, res) => {
  try {
    const user = await UserModel.findOne({ Email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ username: user.Username, email: user.Email, avatarUrl: user.Avatar || "" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.put('/api/profile/:email', async (req, res) => {
  const { email } = req.params;
  const { username, avatarUrl } = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { Email: email },
      { Username: username, Avatar: avatarUrl },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

app.put('/api/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).json({ message: 'Please provide both email and new password' });

  try {
    const user = await UserModel.findOne({ Email: email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare with Argon2 instead of bcrypt
    const isPasswordMatched = await argon2.verify(user.Password, newPassword);
    if (isPasswordMatched) return res.status(400).json({ message: 'New password cannot be the same as the current password' });

    // Hash new password using Argon2
    user.Password = await argon2.hash(newPassword);
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});


app.use('/api/reviews', reviewRoutes);

const TMDB_API_KEY = process.env.TMDB_API_KEY;



async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=genres`);
    return response.data;
  } catch (error) {
    return null;
  }
}

async function fetchMoviesByGenre(genreIds) {
  try {
    const promises = genreIds.map(async (genreId) => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`);
      return response.data.results;
    });

    const moviesByGenre = await Promise.all(promises);
    return moviesByGenre.flat();
  } catch (error) {
    return [];
  }
}

app.get("/api/recommendations/:movieId", async (req, res) => {
  const { movieId } = req.params;

  try {
    // Fetch the current movie's details including genres
    const targetMovie = await fetchMovieDetails(movieId);

    if (!targetMovie) {
      return res.status(500).json({ error: "Failed to fetch movie data." });
    }

    // Extract the genre IDs of the current movie
    const genreIds = targetMovie.genres.map(genre => genre.id);

    // Fetch movies with similar genres
    const recommendedMovies = await fetchMoviesByGenre(genreIds);

    // Filter out the current movie from recommendations
    const filteredRecommendations = recommendedMovies.filter(movie => movie.id !== movieId);

    // Limit to the top 10 recommended movies
    const topRecommendations = filteredRecommendations.slice(0, 10);

    res.json(topRecommendations);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//other api avatar
app.get("/api/avatars", async (req, res) => {
  try {
    const avatars = [];
    for (let i = 0; i < 4; i++) {
      const randomSeed = Math.random().toString(36).substring(7); // Generate a random seed
      const avatarUrl = `https://api.dicebear.com/7.x/personas/svg?seed=${randomSeed}`;
      avatars.push(avatarUrl);
    }

    res.json(avatars);
  } catch (error) {
    console.error("Error generating avatars:", error.message);
    res.status(500).json({ error: "Failed to generate avatars" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
