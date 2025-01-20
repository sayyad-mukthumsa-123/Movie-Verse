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



// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require('axios');
const User = require('./models/UserModel'); // Import User model
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const middleware = require("./middleware/middleware");
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));

// Database connection
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database connected successfully");
}).catch(err => {
  console.error("Database connection error:", err);
});

// Register route
app.route("/register").post(Register);

// Login route
app.route("/login").post(Login);

// Movie Search Route
const API_KEY = process.env.TMDB_API_KEY;
app.get('/api/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).send('Error fetching data from TMDB API');
  }
});

// Save Search History and Fetch Recommendations
app.post('/api/saveSearch', middleware, async (req, res) => {
  const { userId, query } = req.body;
  try {
    const user = await User.findById(userId);
    if (user) {
      user.searchHistory.push(query);
      await user.save();
      res.status(200).json({ message: 'Search saved' });
    } else {
      res.status(400).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error saving search history' });
  }
});

// Movie Recommendations based on Search History
app.get('/api/recommendations/:userId', middleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user && user.searchHistory.length > 0) {
      const recommendations = await getRecommendations(user.searchHistory);
      res.status(200).json(recommendations);
    } else {
      res.status(400).json({ message: 'No search history found for user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recommendations' });
  }
});

// Helper function to get movie recommendations from TMDB
async function getRecommendations(searchHistory) {
  const movieIds = searchHistory.slice(-5); // Use last 5 searches for recommendations
  let recommendations = [];

  for (const movie of movieIds) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie}/recommendations`, {
        params: { api_key: API_KEY },
      });
      recommendations.push(...response.data.results);
    } catch (error) {
      console.error('Error fetching recommendations', error);
    }
  }
  
  return recommendations;
}

// Server connection
app.listen(process.env.PORT, () => {
  console.log("Server running at port", process.env.PORT);
});
