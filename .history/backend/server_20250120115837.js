// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const dotenv = require("dotenv");
// // const Register = require("./controllers/registerController");
// // const Login = require("./controllers/loginController");
// // const middleware = require("./middleware/middleware");
// // const path = require('path');

// // //load environment variables from '.env' file into 'process.env'.
// // dotenv.config();
// // //initialize express
// // const app = express();

// // //middlewares
// // app.use(express.json());
// // //for cross origin usage(frontend) and (backend)
// // app.use(cors({ origin: '*' }));

// // //deployment code :before db connection & routes after middleware
// // // const __dirname1 = path.resolve();
// // // if (process.env.NODE_ENV === "production") {
// // //   app.use(express.static(path.join(__dirname1, "../frontend/build")));
// // //   app.get("*", (req, res) => {
// // //     res.sendFile(path.resolve(__dirname1, "/frontend", "build", "index.html"));
// // //   })
// // // }
// // // else {
// // //   app.get("/", (req, res) => {
// // //     res.send("API is running successfully");
// // //   })
// // // }



// // //db connection
// // mongoose.connect(process.env.MONGO_URL).then(() => {
// //   console.log("Database connected successfully");
// // }).catch(err => {
// //   console.error("Database connection error:", err);
// // });

// // //routers
// // //home page
// // app.route("/").get((req, res) => {
// //   res.status(200).json({ msg: "Movie  page" })
// // });
// // //home page after login only
// // app.route("/home").get(middleware, (req, res) => {
// //   res.status(200).json({ msg: "Home after login" });
// // })
// // //register page
// // app.route("/register").post(Register);
// // //login page
// // app.route("/login").post(Login);
// // //movie details page
// // app.route("/details").get(middleware, (req, res) => {
// //   return res.json({ msg: "Movie details" });
// // });
// // //search
// // const API_KEY = process.env.TMDB_API_KEY;
// // app.get('/api/search/:query', async (req, res) => {
// //   try {
// //     const query = req.params.query;
// //     const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
// //       params: {
// //         api_key: API_KEY,
// //         query: query,
// //       },
// //     });
// //     res.json(response.data.results);
// //   } catch (error) {
// //     res.status(500).send('Error fetching data from TMDB API');
// //   }
// // });


// // //server connection
// // app.listen(process.env.PORT, () => {
// //   console.log("server running at port 5000");
// // });





// //for profile section
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const Register = require("./controllers/registerController");
// const Login = require("./controllers/loginController");
// const middleware = require("./middleware/middleware");
// const User = require("./models/usermodel");
// const path = require("path");

// // Load environment variables from '.env' file into 'process.env'
// dotenv.config();

// // Initialize express
// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// // Deployment code
// // const __dirname1 = path.resolve();
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname1, "../frontend/build")));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.resolve(__dirname1, "/frontend", "build", "index.html"));
// //   });
// // } else {
// //   app.get("/", (req, res) => {
// //     res.send("API is running successfully");
// //   });
// // }

// // DB Connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((err) => {
//     console.error("Database connection error:", err);
//   });

// // Routes
// // Home page
// app.route("/").get((req, res) => {
//   res.status(200).json({ msg: "Movie page" });
// });

// // Home page after login
// app.route("/home").get(middleware, (req, res) => {
//   res.status(200).json({ msg: "Home after login" });
// });

// // Register page
// app.route("/register").post(Register);

// // Login page
// app.route("/login").post(Login);

// // Movie details page
// app.route("/details").get(middleware, (req, res) => {
//   return res.json({ msg: "Movie details" });
// });

// // Search
// const API_KEY = process.env.TMDB_API_KEY;
// app.get("/api/search/:query", async (req, res) => {
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
//     res.status(500).send("Error fetching data from TMDB API");
//   }
// });

// // Profile - Get user details
// app.get("/api/profile/:id", middleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching user details" });
//   }
// });

// // Profile - Update user details
// app.put("/api/profile/:id", middleware, async (req, res) => {
//   try {
//     const { Username, Email, Password } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { Username, Email, Password },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.json({ message: "Profile updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ error: "Error updating user details" });
//   }
// });

// // Server connection
// app.listen(process.env.PORT, () => {
//   console.log("Server running at port 5000");
// });



//profile-2
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const middleware = require("./middleware/middleware");
const User = require("./models/usermodel");
const path = require("path");
const axios = require("axios");

// Load environment variables from '.env' file into 'process.env'
dotenv.config();

// Initialize express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// DB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Routes
// Home page
app.route("/").get((req, res) => {
  res.status(200).json({ msg: "Movie page" });
});

// Home page after login
app.route("/home").get(middleware, (req, res) => {
  res.status(200).json({ msg: "Home after login" });
});

// Register page
app.route("/register").post(Register);

// Login page
app.route("/login").post(Login);

// Movie details page
app.route("/details").get(middleware, (req, res) => {
  return res.json({ msg: "Movie details" });
});

// Search
const API_KEY = process.env.TMDB_API_KEY;
app.get("/api/search/:query", async (req, res) => {
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
    res.status(500).send("Error fetching data from TMDB API");
  }
});

// Profile - Get user details by userId
app.get("/api/profile/:userId", middleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId); // Use `userId` from the route parameter
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user details" });
  }
});

// Profile - Update user details by userId
app.put("/api/profile/:userId", middleware, async (req, res) => {
  try {
    const { Username, Email, Password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId, // Use `userId` from the route parameter
      { Username, Email, Password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating user details" });
  }
});

// Server connection
app.listen(process.env.PORT, () => {
  console.log("Server running at port 5000");
});
