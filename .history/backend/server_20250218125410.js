const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const argon2 = require("argon2");
const nodemailer = require("nodemailer");
const UserModel = require("./models/usermodel");
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");
const resetPasswordController = require("./controllers/resetPasswordController");
const reviewRoutes = require("./routes/reviews");
const multiavatar = require("@multiavatar/multiavatar");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Middleware to authenticate the user via token
const authenticateToken = (req, res, next) => {
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
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database connected successfully"))
  .catch(err => console.error("Database connection error:", err));

// Routes
app.post("/register", Register);
app.post("/login", Login);
app.use("/api/reviews", reviewRoutes);

// OTP generation and sending
let otpStore = {};

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,  // Bypass certificate validation for development purposes
  },
});

// Function to send OTP email
const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Registration",
    text: `Your OTP for registration is ${otp}. Please use it to complete your registration.`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
  }
};

// OTP Routes - Now combined with email existence check
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ Email: email });
    
    if (user) {
      return res.status(400).json({ message: "Email already exists." }); // Check if user exists and stop OTP sending
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp;

    await sendOtpEmail(email, otp);
    res.json({ message: "OTP sent to your email." });
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP. Please try again." });
  }
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === parseInt(otp)) {
    res.json({ message: "OTP verified successfully!" });
    delete otpStore[email];
  } else {
    res.status(400).json({ message: "Invalid OTP." });
  }
});

app.post("/resend-otp", async (req, res) => {
  const { email } = req.body;
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = newOtp;

  await sendOtpEmail(email, newOtp);
  res.json({ message: "New OTP sent to your email." });
});

// Update user profile
app.put("/api/profile/:email", async (req, res) => {
  const { email } = req.params;
  const { username, avatarUrl } = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { Email: email },
      { Username: username, Avatar: avatarUrl },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile" });
  }
});

// Reset user password
app.put("/api/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).json({ message: "Please provide both email and new password" });

  try {
    const user = await UserModel.findOne({ Email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordMatched = await argon2.verify(user.Password, newPassword);
    if (isPasswordMatched) return res.status(400).json({ message: "New password cannot be the same as the current password" });

    user.Password = await argon2.hash(newPassword);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error, please try again later" });
  }
});

// Get user profile
app.get("/api/profile/:email", async (req, res) => {
  try {
    const user = await UserModel.findOne({ Email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.Username,
      email: user.Email,
      avatarUrl: user.Avatar || "https://via.placeholder.com/150",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Generate a list of avatars (4 random avatars)
app.get("/api/avatars", async (req, res) => {
  try {
    const avatars = [];
    for (let i = 0; i < 4; i++) {
      const avatarId = Math.random().toString(36).substring(7);
      const avatarSvg = multiavatar(avatarId);
      avatars.push({ id: avatarId, svg: avatarSvg });
    }
    res.status(200).json(avatars);
  } catch (error) {
    console.error("Error generating avatars:", error.message);
    res.status(500).json({ error: "Failed to generate avatars" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

