const jwt = require('jsonwebtoken');
const UserModel = require("../models/usermodel");

const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Validate input fields
        if (!Email || !Password) {
            return res.status(400).json({ msg: "Please provide both email and password." });
        }

        // Check if user exists
        const user = await UserModel.findOne({ Email });
        if (!user) {
            console.log("User not found with email:", Email);
            return res.status(400).json({ msg: "Invalid email" });
        }

        console.log("Stored Hashed Password:", user.Password);
        console.log("Entered Password:", Password);

        // Verify password using the model's comparePassword method
        const isMatch = await user.comparePassword(Password);
        console.log("Password verification result:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid password." });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        return res.status(200).json({ token,id, msg: "User login successful." });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ msg: "Internal server error. Please try again later." });
    }
};

module.exports = Login;
