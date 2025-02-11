// // // const jwt = require('jsonwebtoken');
// // // const UserModel = require("../models/usermodel");

// // // const Register = async (req, res) => {
// // //     try {
// // //         const { Username, Email, Password, ConfirmPassword } = req.body;

// // //         const trimmedPassword = Password;
// // //         const trimmedConfirmPassword = ConfirmPassword;

// // //         if (trimmedPassword !== trimmedConfirmPassword) {
// // //             return res.status(400).json({ msg: "Password and ConfirmPassword don't match" });
// // //         }
// // //         const userExist = await UserModel.findOne({ Email });

// // //         if (!userExist) {
// // //             let newUser = new UserModel({ Username, Email, Password: trimmedPassword });
// // //             await newUser.save();

// // //             const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

// // //             return res.status(200).json({ token, msg: "User registered successfully" });
// // //         }

// // //         return res.status(400).json({ msg: "Email already exists" });

// // //     } catch (error) {
// // //         return res.status(400).json({ msg: "Error: " + error });
// // //     }
// // // }

// // // module.exports = Register;


// // //avatar store
// // const jwt = require('jsonwebtoken');
// // const bcrypt = require('bcrypt');
// // const axios = require('axios');  // Import axios to make API requests
// // const UserModel = require("../models/usermodel");

// // const Register = async (req, res) => {
// //     try {
// //         const { Username, Email, Password, ConfirmPassword } = req.body;

// //         if (!Username || !Email || !Password || !ConfirmPassword) {
// //             return res.status(400).json({ msg: "All fields are required." });
// //         }

// //         // Check if passwords match
// //         if (Password !== ConfirmPassword) {
// //             return res.status(400).json({ msg: "Password and ConfirmPassword don't match." });
// //         }

// //         // Check if the user already exists
// //         const userExist = await UserModel.findOne({ Email });
// //         if (userExist) {
// //             return res.status(400).json({ msg: "Email already exists." });
// //         }

// //         // Hash the password
// //         const hashedPassword = await bcrypt.hash(Password, 10);

// //         // Fetch avatar from multiavatar API
// //         const avatarUrl = `https://api.multiavatar.com/${Math.floor(Math.random() * 100000000)}.svg`; // Using a random number for unique avatar URL

// //         // Create a new user
// //         const newUser = new UserModel({
// //             Username,
// //             Email,
// //             Password: hashedPassword,
// //             Avatar: avatarUrl, // Store the generated avatar URL
// //         });

// //         await newUser.save();

// //         // Generate JWT token
// //         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

// //         return res.status(200).json({ token, msg: "User registered successfully." });

// //     } catch (error) {
// //         console.error("Registration Error:", error);
// //         return res.status(500).json({ msg: "Internal server error. Please try again later." });
// //     }
// // };

// // module.exports = Register;

// //argon
// const jwt = require('jsonwebtoken');
// const argon2 = require('argon2');  // Using Argon2 for password hashing
// const UserModel = require("../models/usermodel");

// const Register = async (req, res) => {
//     try {
//         const { Username, Email, Password, ConfirmPassword } = req.body;

//         // Validate input fields
//         if (!Username || !Email || !Password || !ConfirmPassword) {
//             return res.status(400).json({ msg: "All fields are required." });
//         }

//         if (Password.length < 8) {
//             return res.status(400).json({ msg: "Password must be at least 8 characters long." });
//         }

//         if (Password !== ConfirmPassword) {
//             return res.status(400).json({ msg: "Passwords do not match." });
//         }

//         // Check if the user already exists
//         const userExist = await UserModel.findOne({ Email });
//         if (userExist) {
//             return res.status(400).json({ msg: "Email already exists." });
//         }

//         // Hash the password using Argon2
//         const hashedPassword = await argon2.hash(Password);

//         // Generate a unique avatar using Multiavatar
//         const avatarUrl = `https://api.multiavatar.com/${encodeURIComponent(Username)}.svg`;

//         // Create a new user
//         const newUser = new UserModel({
//             Username,
//             Email,
//             Password: hashedPassword,
//             Avatar: avatarUrl,
//         });

//         await newUser.save();

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: newUser._id },
//             process.env.JWT_SECRET,
//             { expiresIn: process.env.JWT_EXPIRES_IN || '1h' } // Configurable expiration time
//         );

//         return res.status(201).json({ token, msg: "User registered successfully." });

//     } catch (error) {
//         console.error("Registration Error:", error);
//         return res.status(500).json({ msg: "Internal server error. Please try again later." });
//     }
// };

// module.exports = Register;


//login-err
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');  // Using Argon2 for password hashing
const UserModel = require("../models/usermodel");

const Register = async (req, res) => {
    try {
        const { Username, Email, Password, ConfirmPassword } = req.body;

        // Validate input fields
        if (!Username || !Email || !Password || !ConfirmPassword) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        if (Password.length < 8) {
            return res.status(400).json({ msg: "Password must be at least 8 characters long." });
        }

        if (Password !== ConfirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match." });
        }

        // Check if the user already exists
        const userExist = await UserModel.findOne({ Email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists." });
        }

        // **Securely hash the password using Argon2**
        console.log("Hashing password...");
        const hashedPassword = await argon2.hash(Password, {
            type: argon2.argon2id,  // More secure than argon2i
            memoryCost: 2 ** 16,     // 64 MB memory usage
            timeCost: 3,             // Iterations (higher is more secure)
            parallelism: 1,          // Single-threaded for consistency
        });

        console.log("Password hashed successfully.");

        // Generate a unique avatar using Multiavatar
        const avatarUrl = `https://api.multiavatar.com/${encodeURIComponent(Username)}.svg`;

        // Create a new user
        const newUser = new UserModel({
            Username,
            Email,
            Password: hashedPassword,  // Store hashed password
            Avatar: avatarUrl,
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' } // Configurable expiration time
        );

        return res.status(201).json({ token, msg: "User registered successfully." });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ msg: "Internal server error. Please try again later." });
    }
};

module.exports = Register;
