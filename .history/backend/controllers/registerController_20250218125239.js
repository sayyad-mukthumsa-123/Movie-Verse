const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const UserModel = require("../models/usermodel");
const multiavatar = require("@multiavatar/multiavatar");

const Register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, avatar } = req.body;

    // Check for missing fields
    if (!username || !email || !password || !confirmPassword || !avatar) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({ msg: "Password must be at least 8 characters long." });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match." });
    }

    // Check if user already exists
    const userExist = await UserModel.findOne({ Email: email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(password);

    // Create the new user object
    const newUser = new UserModel({
      Username: username,
      Email: email,
      Password: hashedPassword,
      Avatar: avatar, // Store the selected avatar directly from request
    });

    // Save the user to the database
    await newUser.save();

    // Create JWT token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send response with token and avatar URL
    return res.status(201).json({
      token,
      msg: "User registered successfully.",
      avatarUrl: avatar,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ msg: "Internal server error." });
  }
};

module.exports = Register;
