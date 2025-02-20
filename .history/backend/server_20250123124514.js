// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const cors = require("cors");
// // // // // const dotenv = require("dotenv");
// // // // // const Register = require("./controllers/registerController");
// // // // // const Login = require("./controllers/loginController");
// // // // // const middleware = require("./middleware/middleware");
// // // // // const path = require('path');

// // // // // //load environment variables from '.env' file into 'process.env'.
// // // // // dotenv.config();
// // // // // //initialize express
// // // // // const app = express();

// // // // // //middlewares
// // // // // app.use(express.json());
// // // // // //for cross origin usage(frontend) and (backend)
// // // // // app.use(cors({ origin: '*' }));

// // // // // //deployment code :before db connection & routes after middleware
// // // // // // const __dirname1 = path.resolve();
// // // // // // if (process.env.NODE_ENV === "production") {
// // // // // //   app.use(express.static(path.join(__dirname1, "../frontend/build")));
// // // // // //   app.get("*", (req, res) => {
// // // // // //     res.sendFile(path.resolve(__dirname1, "/frontend", "build", "index.html"));
// // // // // //   })
// // // // // // }
// // // // // // else {
// // // // // //   app.get("/", (req, res) => {
// // // // // //     res.send("API is running successfully");
// // // // // //   })
// // // // // // }



// // // // // //db connection
// // // // // mongoose.connect(process.env.MONGO_URL).then(() => {
// // // // //   console.log("Database connected successfully");
// // // // // }).catch(err => {
// // // // //   console.error("Database connection error:", err);
// // // // // });

// // // // // //routers
// // // // // //home page
// // // // // app.route("/").get((req, res) => {
// // // // //   res.status(200).json({ msg: "Movie  page" })
// // // // // });
// // // // // //home page after login only
// // // // // app.route("/home").get(middleware, (req, res) => {
// // // // //   res.status(200).json({ msg: "Home after login" });
// // // // // })
// // // // // //register page
// // // // // app.route("/register").post(Register);
// // // // // //login page
// // // // // app.route("/login").post(Login);
// // // // // //movie details page
// // // // // app.route("/details").get(middleware, (req, res) => {
// // // // //   return res.json({ msg: "Movie details" });
// // // // // });
// // // // // //search
// // // // // const API_KEY = process.env.TMDB_API_KEY;
// // // // // app.get('/api/search/:query', async (req, res) => {
// // // // //   try {
// // // // //     const query = req.params.query;
// // // // //     const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
// // // // //       params: {
// // // // //         api_key: API_KEY,
// // // // //         query: query,
// // // // //       },
// // // // //     });
// // // // //     res.json(response.data.results);
// // // // //   } catch (error) {
// // // // //     res.status(500).send('Error fetching data from TMDB API');
// // // // //   }
// // // // // });


// // // // // //server connection
// // // // // app.listen(process.env.PORT, () => {
// // // // //   console.log("server running at port 5000");
// // // // // });


// // // // //avatar store
// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const cors = require("cors");
// // // // const dotenv = require("dotenv");
// // // // const jwt = require("jsonwebtoken"); // For JWT token verification
// // // // const UserModel = require("./models/usermodel"); // Assuming User model is in 'models/User.js'

// // // // // Controllers
// // // // const Register = require("./controllers/registerController");
// // // // const Login = require("./controllers/loginController");

// // // // dotenv.config(); // Load environment variables

// // // // const app = express();

// // // // // Middleware
// // // // app.use(express.json());
// // // // app.use(cors({ origin: '*' }));

// // // // // Middleware to authenticate the user via token
// // // // // const middleware = (req, res, next) => {
// // // // //   const token = req.header("Authorization")?.replace("Bearer ", "");
  
// // // // //   if (!token) {
// // // // //     return res.status(401).json({ msg: "Access denied, token missing!" });
// // // // //   }

// // // // //   try {
// // // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the same secret key for verification
// // // // //     req.user = decoded; // Save user data from token
// // // // //     next();
// // // // //   } catch (error) {
// // // // //     return res.status(400).json({ msg: "Invalid token" });
// // // // //   }
// // // // // };

// // // // // Database Connection
// // // // mongoose.connect(process.env.MONGO_URL, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true
// // // // }).then(() => {
// // // //   console.log("Database connected successfully");
// // // // }).catch(err => {
// // // //   console.error("Database connection error:", err);
// // // // });

// // // // // Routes
// // // // app.post("/register", Register);
// // // // app.post("/login", Login);

// // // // const middleware = (req, res, next) => {
// // // //   const token = req.header("Authorization")?.replace("Bearer ", "");
  
// // // //   if (!token) {
// // // //     return res.status(401).json({ msg: "Access denied, token missing!" });
// // // //   }

// // // //   try {
// // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //     req.user = decoded;
// // // //     next();
// // // //   } catch (error) {
// // // //     return res.status(400).json({ msg: "Invalid token" });
// // // //   }
// // // // };

// // // // // Profile update route
// // // // app.put("/profile/update", middleware, async (req, res) => {
// // // //   try {
// // // //     const { Username, Email, Password } = req.body;
// // // //     const userId = req.user.id;

// // // //     // Find the user
// // // //     const user = await UserModel.findById(userId);
// // // //     if (!user) {
// // // //       return res.status(404).json({ msg: "User not found" });
// // // //     }

// // // //     // Update the user's details
// // // //     if (Username) user.Username = Username;
// // // //     if (Email) user.Email = Email;

// // // //     if (Password) {
// // // //       const hashedPassword = await bcrypt.hash(Password, 10);
// // // //       user.Password = hashedPassword;
// // // //     }

// // // //     await user.save();
// // // //     return res.status(200).json({ msg: "Profile updated successfully" });
// // // //   } catch (error) {
// // // //     return res.status(500).json({ msg: "Error updating profile" });
// // // //   }
// // // // });

// // // // // Fetch user profile route
// // // // app.get("/profile", middleware, async (req, res) => {
// // // //   try {
// // // //     const userId = req.user.id;
// // // //     const user = await UserModel.findById(userId).select("-Password"); // Exclude password from the response
    
// // // //     if (!user) {
// // // //       return res.status(404).json({ msg: "User not found" });
// // // //     }

// // // //     return res.status(200).json({
// // // //       username: user.Username,
// // // //       email: user.Email,
// // // //       avatar: user.Avatar,
// // // //     });
// // // //   } catch (error) {
// // // //     return res.status(500).json({ msg: "Error fetching profile" });
// // // //   }
// // // // });
// // // // // Server Connection
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running at port ${PORT}`);
// // // // });



// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const cors = require("cors");
// // // const dotenv = require("dotenv");
// // // const jwt = require("jsonwebtoken");
// // // const bcrypt = require("bcryptjs"); // Add bcryptjs for password hashing
// // // const UserModel = require("./models/usermodel"); // Your user model
// // // const Register = require("./controllers/registerController");
// // // const Login = require("./controllers/loginController");

// // // dotenv.config(); // Load environment variables

// // // const app = express();

// // // // Middleware
// // // app.use(express.json());
// // // app.use(cors({ origin: '*' }));

// // // // Middleware to authenticate the user via token
// // // const middleware = (req, res, next) => {
// // //   const token = req.header("Authorization")?.replace("Bearer ", "");
  
// // //   if (!token) {
// // //     return res.status(401).json({ msg: "Access denied, token missing!" });
// // //   }

// // //   try {
// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // //     req.user = decoded;
// // //     next();
// // //   } catch (error) {
// // //     return res.status(400).json({ msg: "Invalid token" });
// // //   }
// // // };

// // // // Database connection
// // // mongoose.connect(process.env.MONGO_URL, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // }).then(() => {
// // //   console.log("Database connected successfully");
// // // }).catch(err => {
// // //   console.error("Database connection error:", err);
// // // });
// // // app.get("/",()=>
// // // {
// // //   console.log("HI");
  
// // // })
// // // // Routes
// // // app.post("/register", Register);

// // // app.post("/login", Login);

// // // // Profile update route
// // // app.put("/profile/update", middleware, async (req, res) => {
// // //   try {
// // //     const { Username, Email, Password } = req.body;
// // //     const userId = req.user.id;

// // //     // Find the user
// // //     const user = await UserModel.findById(userId);
// // //     if (!user) {
// // //       return res.status(404).json({ msg: "User not found" });
// // //     }

// // //     // Update the user's details
// // //     if (Username) user.Username = Username;
// // //     if (Email) user.Email = Email;

// // //     if (Password) {
// // //       const hashedPassword = await bcrypt.hash(Password, 10);
// // //       user.Password = hashedPassword;
// // //     }

// // //     await user.save();
// // //     return res.status(200).json({ msg: "Profile updated successfully" });
// // //   } catch (error) {
// // //     return res.status(500).json({ msg: "Error updating profile" });
// // //   }
// // // });

// // // // Fetch user profile route
// // // app.get("/profile", middleware, async (req, res) => {
// // //   try {
// // //     const userId = req.user.id;
// // //     const user = await UserModel.findById(userId).select("-Password"); // Exclude password from response
    
// // //     if (!user) {
// // //       return res.status(404).json({ msg: "User not found" });
// // //     }

// // //     return res.status(200).json({
// // //       username: user.Username,
// // //       email: user.Email,
// // //       avatar: user.Avatar,
// // //     });
// // //   } catch (error) {
// // //     return res.status(500).json({ msg: "Error fetching profile" });
// // //   }
// // // });

// // // // Server connection
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running at port ${PORT}`);
// // // });


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs"); // Add bcryptjs for password hashing
// const UserModel = require("./models/usermodel"); // Your user model
// const Register = require("./controllers/registerController");
// const Login = require("./controllers/loginController");
// const usermodel = require("./models/usermodel");

// dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ origin: '*' }));

// // Middleware to authenticate the user via token
// const middleware = (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
  
//   if (!token) {
//     return res.status(401).json({ msg: "Access denied, token missing!" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded token:", decoded);
//     req.user = decoded;  // Add the decoded user info to the request
//     next();
//   } catch (error) {
//     return res.status(400).json({ msg: "Invalid token" });
//   }
// };

// // Database connection
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log("Database connected successfully");
// }).catch(err => {
//   console.error("Database connection error:", err);
// });

// // Routes
// app.post("/register", Register);

// app.post("/login", Login);


// ////profile-get
// app.get('/api/profile/:email', async (req, res) => {
//   try {
//     console.log(`Fetching profile for: ${req.params.email}`);
    
//     const user = await usermodel.findOne({ email: req.params.email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user); // Send user data back to frontend
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// ////


// // Server connection
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/usermodel"); // Your user model
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const usermodel = require("./models/usermodel");
const resetPasswordController = require("./controllers/resetPasswordController");
dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Middleware to authenticate the user via token
const middleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add the decoded user info to the request
    next();
  } catch (error) {
    return res.status(400).json({ msg: "Invalid token" });
  }
};

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Routes
app.post("/register", Register);

app.post("/login", Login);

// Profile route to fetch user data by email
app.get("/api/profile/:email", async (req, res) => {
  try {
    // console.log(`Fetching profile for: ${req.params.email}`);

    const user = await usermodel.findOne({ Email: req.params.email });
    
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      username: user.Username,
      email: user.Email,
      avatarUrl: user.Avatar || "",// Include avatarUrl if available
    });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
});


//profile-update
// app.put('/api/profile/:email', async (req, res) => {
//   const { email } = req.params;
//   const { username, avatarUrl } = req.body;

//   try {
//     const updatedUser = await usermodel.findOneAndUpdate(
//       { Email: email },
//       { Username: username, Avatar: avatarUrl }, // Make sure Avatar is saved correctly
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({
//       message: 'Profile updated successfully',
//       user: updatedUser,
//     });
//   } catch (err) {
//     console.error("Error updating profile:", err);
//     res.status(500).json({ message: 'Failed to update profile' });
//   }
// });



app.put('/api/profile/:email', async (req, res) => {
  const { email } = req.params;
  const { username, avatarUrl } = req.body;

  try {
    const updatedUser = await usermodel.findOneAndUpdate(
      { Email: email },
      { Username: username, Avatar: avatarUrl }, // Make sure Avatar is saved correctly
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});


//reset pwd
app.put('/api/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: 'Please provide both email and new password' });
  }

  try {
    // Find the user by email
    const user = await usermodel.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare new password with the existing password
    const isPasswordMatched = await user.comparePassword(newPassword);
    if (isPasswordMatched) {
      return res.status(400).json({ message: 'New password cannot be the same as the current password' });
    }

    // Update password
    user.Password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error updating password:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Import necessary models
const Review = require('./models/reviewModel');
const Rating = require('./models/ratingModel');

// Add Review Route
// app.post('/api/reviews/:movieId', middleware, async (req, res) => {
//   const { movieId } = req.params;
//   const { reviewText } = req.body;

//   if (!reviewText) {
//     return res.status(400).json({ message: 'Review text is required' });
//   }

//   try {
//     const newReview = new Review({
//       movieId,
//       userId: req.user._id,
//       reviewText,
//     });

//     await newReview.save();
//     res.status(201).json({ message: 'Review added successfully' });
//   } catch (err) {
//     console.error('Error adding review:', err);
//     res.status(500).json({ message: 'Server error, please try again later' });
//   }
// });


app.post('/api/reviews/:movieId', middleware, async (req, res) => {
  const { movieId } = req.params;
  const { reviewText } = req.body;

  if (!reviewText) {
    return res.status(400).json({ message: 'Review text is required' });
  }

  try {
    const newReview = new Review({
      movieId,
      userId: req.user._id, // Use authenticated user id
      reviewText,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (err) {
    console.error('Error adding review:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Get Top 10 Reviews for a Movie
app.get('/api/reviews/:movieId', async (req, res) => {
  const { movieId } = req.params;

  try {
    const reviews = await Review.find({ movieId })
      .sort({ createdAt: -1 })  // Latest reviews first
      .limit(10);

    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Add Rating Route
app.post('/api/ratings/:movieId', middleware, async (req, res) => {
  const { movieId } = req.params;
  const { rating } = req.body;

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5' });
  }

  try {
    const newRating = new Rating({
      movieId,
      userId: req.user._id,
      rating,
    });

    await newRating.save();
    res.status(201).json({ message: 'Rating added successfully' });
  } catch (err) {
    console.error('Error adding rating:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Get Top 10 Ratings for a Movie
app.get('/api/ratings/:movieId', async (req, res) => {
  const { movieId } = req.params;

  try {
    const ratings = await Rating.find({ movieId })
      .sort({ createdAt: -1 })  // Latest ratings first
      .limit(10);

    res.json(ratings);
  } catch (err) {
    console.error('Error fetching ratings:', err);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});


// Server connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
