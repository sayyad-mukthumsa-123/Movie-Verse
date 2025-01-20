// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const Register = require("./controllers/registerController");
// const Login = require("./controllers/loginController");
// const middleware = require("./middleware/middleware");
// const path = require('path');

// //load environment variables from '.env' file into 'process.env'.
// dotenv.config();
// //initialize express
// const app = express();

// //middlewares
// app.use(express.json());
// //for cross origin usage(frontend) and (backend)
// app.use(cors({ origin: '*' }));

// //deployment code :before db connection & routes after middleware
// // const __dirname1 = path.resolve();
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname1, "../frontend/build")));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.resolve(__dirname1, "/frontend", "build", "index.html"));
// //   })
// // }
// // else {
// //   app.get("/", (req, res) => {
// //     res.send("API is running successfully");
// //   })
// // }



// //db connection
// mongoose.connect(process.env.MONGO_URL).then(() => {
//   console.log("Database connected successfully");
// }).catch(err => {
//   console.error("Database connection error:", err);
// });

// //routers
// //home page
// app.route("/").get((req, res) => {
//   res.status(200).json({ msg: "Movie  page" })
// });
// //home page after login only
// app.route("/home").get(middleware, (req, res) => {
//   res.status(200).json({ msg: "Home after login" });
// })
// //register page
// app.route("/register").post(Register);
// //login page
// app.route("/login").post(Login);
// //movie details page
// app.route("/details").get(middleware, (req, res) => {
//   return res.json({ msg: "Movie details" });
// });
// //search
// const API_KEY = process.env.TMDB_API_KEY;
// app.get('/api/search/:query', async (req, res) => {
//   try {
//     const query = req.params.query;
//     const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
//       params: {
//         api_key: API_KEY,
//         query: query,
//       },
//     });
//     res.json(response.data.results);
//   } catch (error) {
//     res.status(500).send('Error fetching data from TMDB API');
//   }
// });


// //server connection
// app.listen(process.env.PORT, () => {
//   console.log("server running at port 5000");
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const natural = require("natural");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const API_KEY = process.env.TMDB_API_KEY;

// Movie Schema
const movieSchema = new mongoose.Schema({
  tmdbId: String,
  title: String,
  genres: [String],
  director: String,
  cast: [String],
  overview: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// Recommendation Route
app.get("/api/recommend/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the movie by TMDb ID
    const movie = await Movie.findOne({ tmdbId: id });
    if (!movie) return res.status(404).send("Movie not found");

    // Fetch all movies from the database
    const allMovies = await Movie.find();

    // Compute cosine similarity based on genres, director, and cast
    const tokenizer = new natural.WordTokenizer();
    const targetFeatures = [
      ...movie.genres,
      movie.director,
      ...movie.cast,
      movie.overview,
    ].join(" ");
    const targetTokens = tokenizer.tokenize(targetFeatures.toLowerCase());

    const similarityScores = allMovies.map((otherMovie) => {
      if (otherMovie.tmdbId === movie.tmdbId) return { movie: otherMovie, score: 0 };

      const otherFeatures = [
        ...otherMovie.genres,
        otherMovie.director,
        ...otherMovie.cast,
        otherMovie.overview,
      ].join(" ");
      const otherTokens = tokenizer.tokenize(otherFeatures.toLowerCase());

      const similarity = natural.JaroWinklerDistance(
        targetTokens.join(" "),
        otherTokens.join(" ")
      );
      return { movie: otherMovie, score: similarity };
    });

    // Sort by similarity score and return top 5
    const recommendations = similarityScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => item.movie);

    res.json(recommendations);
  } catch (error) {
    res.status(500).send("Error generating recommendations");
  }
});

// Populate Database (Run Once)
app.get("/api/populate", async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
    const movies = response.data.results;

    for (const movie of movies) {
      const details = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`);
      const credits = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`);

      const director = credits.data.crew.find((person) => person.job === "Director")?.name || "Unknown";
      const cast = credits.data.cast.slice(0, 5).map((actor) => actor.name);

      await Movie.create({
        tmdbId: movie.id,
        title: movie.title,
        genres: movie.genres.map((genre) => genre.name),
        director,
        cast,
        overview: movie.overview,
      });
    }

    res.send("Movies populated successfully!");
  } catch (error) {
    res.status(500).send("Error populating database");
  }
});
