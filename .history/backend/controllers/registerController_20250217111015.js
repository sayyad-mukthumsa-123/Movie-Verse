// // // // const jwt = require('jsonwebtoken');
// // // // const argon2 = require('argon2');  // Using Argon2 for password hashing
// // // // const UserModel = require("../models/usermodel");

// // // // const Register = async (req, res) => {
// // // //     try {
// // // //         const { Username, Email, Password, ConfirmPassword } = req.body;

// // // //         // Validate input fields
// // // //         if (!Username || !Email || !Password || !ConfirmPassword) {
// // // //             return res.status(400).json({ msg: "All fields are required." });
// // // //         }

// // // //         if (Password.length < 8) {
// // // //             return res.status(400).json({ msg: "Password must be at least 8 characters long." });
// // // //         }

// // // //         if (Password !== ConfirmPassword) {
// // // //             return res.status(400).json({ msg: "Passwords do not match." });
// // // //         }

// // // //         // Check if the user already exists
// // // //         const userExist = await UserModel.findOne({ Email });
// // // //         if (userExist) {
// // // //             return res.status(400).json({ msg: "Email already exists." });
// // // //         }

// // // //         // **Securely hash the password using Argon2**
// // // //         console.log("Hashing password...");
// // // //         const hashedPassword = await argon2.hash(Password, {
// // // //             type: argon2.argon2id,  // More secure than argon2i
// // // //             memoryCost: 2 ** 16,     // 64 MB memory usage
// // // //             timeCost: 3,             // Iterations (higher is more secure)
// // // //             parallelism: 1,          // Single-threaded for consistency
// // // //         });

// // // //         console.log("Password hashed successfully.");

// // // //         // Generate a unique avatar using Multiavatar
// // // //         const avatarUrl = `https://api.multiavatar.com/${encodeURIComponent(Username)}.svg`;

// // // //         // Create a new user
// // // //         const newUser = new UserModel({
// // // //             Username,
// // // //             Email,
// // // //             Password: hashedPassword,  // Store hashed password
// // // //             Avatar: avatarUrl,
// // // //         });

// // // //         await newUser.save();

// // // //         // Generate JWT token
// // // //         const token = jwt.sign(
// // // //             { id: newUser._id },
// // // //             process.env.JWT_SECRET,
// // // //             { expiresIn: process.env.JWT_EXPIRES_IN || '1h' } // Configurable expiration time
// // // //         );

// // // //         return res.status(201).json({ token, msg: "User registered successfully." });

// // // //     } catch (error) {
// // // //         console.error("Registration Error:", error);
// // // //         return res.status(500).json({ msg: "Internal server error. Please try again later." });
// // // //     }
// // // // };

// // // // module.exports = Register;


// // // const jwt = require('jsonwebtoken');
// // // const argon2 = require('argon2');
// // // const UserModel = require("../models/usermodel");
// // // const multiavatar = require("@multiavatar/multiavatar");

// // // const Register = async (req, res) => {
// // //     try {
// // //         const { Username, Email, Password, ConfirmPassword } = req.body;

// // //         if (!Username || !Email || !Password || !ConfirmPassword) {
// // //             return res.status(400).json({ msg: "All fields are required." });
// // //         }

// // //         if (Password.length < 8) {
// // //             return res.status(400).json({ msg: "Password must be at least 8 characters long." });
// // //         }

// // //         if (Password !== ConfirmPassword) {
// // //             return res.status(400).json({ msg: "Passwords do not match." });
// // //         }

// // //         const userExist = await UserModel.findOne({ Email });
// // //         if (userExist) {
// // //             return res.status(400).json({ msg: "Email already exists." });
// // //         }

// // //         const hashedPassword = await argon2.hash(Password);

// // //         // Generate a unique avatar using Multiavatar (Fixed)
// // //         const avatarSvg = multiavatar(Username);
// // //         const avatarUrl = `data:image/svg+xml;base64,${Buffer.from(avatarSvg).toString("base64")}`;

// // //         const newUser = new UserModel({
// // //             Username,
// // //             Email,
// // //             Password: hashedPassword,
// // //             Avatar: avatarUrl,
// // //         });

// // //         await newUser.save();

// // //         const token = jwt.sign(
// // //             { id: newUser._id },
// // //             process.env.JWT_SECRET,
// // //             { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// // //         );
        
// // //         return res.status(201).json({ token, msg: "User registered successfully.", avatarUrl });

// // //     } catch (error) {
// // //         console.error("Registration Error:", error);
// // //         return res.status(500).json({ msg: "Internal server error." });
// // //     }
// // // };

// // // module.exports = Register;



// // //avt
// // const jwt = require('jsonwebtoken');
// // const argon2 = require('argon2');
// // const UserModel = require("../models/usermodel");
// // const multiavatar = require("@multiavatar/multiavatar");

// // const Register = async (req, res) => {
// //     try {
// //         const { Username, Email, Password, ConfirmPassword, Avatar } = req.body;

// //         if (!Username || !Email || !Password || !ConfirmPassword || !Avatar) {
// //             return res.status(400).json({ msg: "All fields are required." });
// //         }

// //         if (Password.length < 8) {
// //             return res.status(400).json({ msg: "Password must be at least 8 characters long." });
// //         }

// //         if (Password !== ConfirmPassword) {
// //             return res.status(400).json({ msg: "Passwords do not match." });
// //         }

// //         const userExist = await UserModel.findOne({ Email });
// //         if (userExist) {
// //             return res.status(400).json({ msg: "Email already exists." });
// //         }

// //         const hashedPassword = await argon2.hash(Password);

// //         // Use the selected avatar if provided, else generate a default one
// //         const avatarSvg = Avatar || multiavatar(Username);
// //         const avatarUrl = `data:image/svg+xml;base64,${Buffer.from(avatarSvg).toString("base64")}`;

// //         const newUser = new UserModel({
// //             Username,
// //             Email,
// //             Password: hashedPassword,
// //             Avatar: avatarUrl,
// //         });

// //         await newUser.save();

// //         const token = jwt.sign(
// //             { id: newUser._id },
// //             process.env.JWT_SECRET,
// //             { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
// //         );

// //         return res.status(201).json({ token, msg: "User registered successfully.", avatarUrl });

// //     } catch (error) {
// //         console.error("Registration Error:", error);
// //         return res.status(500).json({ msg: "Internal server error." });
// //     }
// // };

// // module.exports = Register;


// //avt-3
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const UserModel = require("../models/usermodel");
const multiavatar = require("@multiavatar/multiavatar");

const Register = async (req, res) => {
  try {
    const { Username, Email, Password, ConfirmPassword, Avatar } = req.body;

    // Check for missing fields
    if (!Username || !Email || !Password || !ConfirmPassword) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    // Validate password length
    if (Password.length < 8) {
      return res.status(400).json({ msg: "Password must be at least 8 characters long." });
    }

    // Check if passwords match
    if (Password !== ConfirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match." });
    }

    // Check if user already exists
    const userExist = await UserModel.findOne({ Email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists." });
    }

    // Hash the password
    const hashedPassword = await argon2.hash(Password);

    // Generate avatar or use the provided one
    let avatarSvg;
    if (Avatar) {
      avatarSvg = Avatar;
    } else {
      avatarSvg = multiavatar(Username);
    }

    // Ensure the avatar is properly formatted before encoding
    const avatarBuffer = Buffer.from(avatarSvg, 'utf-8');
    const avatarUrl = `data:image/svg+xml;base64,${avatarBuffer.toString("base64")}`;

    // Log the avatar URL for debugging (optional)
    console.log("Avatar URL:", avatarUrl);

    // Create the new user object
    const newUser = new UserModel({
      Username,
      Email,
      Password: hashedPassword,
      Avatar: avatarUrl,
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
      avatarUrl 
    });

  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ msg: "Internal server error." });
  }
};

module.exports = Register;
