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
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const middleware = require("./middleware/middleware");
const path = require("path");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Home Route
app.route("/").get((req, res) => {
  res.status(200).json({ msg: "Movie page" });
});

// Register Route
app.route("/register").post(Register);

// Login Route
app.route("/login").post(Login);

// Recommendation Route
app.get("/api/recommendations/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          append_to_response: "credits",
        },
      }
    );

    const movie = response.data;
    const genreIds = movie.genres.map((genre) => genre.id).join(",");
    const similarMovies = await axios.get(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_genres: genreIds,
          sort_by: "popularity.desc",
          page: 1,
        },
      }
    );

    res.json(similarMovies.data.results);
  } catch (error) {
    res.status(500).send("Error fetching recommendations");
  }
});

// Search Route
app.get("/api/search/:query", async (req, res) => {
  try {
    const query = req.params.query;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: query,
        },
      }
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send("Error fetching data from TMDB API");
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
