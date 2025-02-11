// // // // // const jwt = require('jsonwebtoken');
// // // // // const UserModel = require("../models/usermodel");

// // // // // const Login = async (req, res) => {
// // // // //     try {
// // // // //         const { Email, Password } = req.body;
// // // // //         const userExist = await UserModel.findOne({ Email });
// // // // //         if (userExist) {
// // // // //             if (userExist.Password === Password) {
// // // // //                 const payload = {
// // // // //                     user: {
// // // // //                         id: userExist.id
// // // // //                     }
// // // // //                 };
// // // // //                 const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret
// // // // //                 return res.json({ token, msg: "User login successful" });
// // // // //             } else {
// // // // //                 return res.status(400).json({ msg: "Invalid credentials" });
// // // // //             }
// // // // //         } else {
// // // // //             return res.status(400).json({ msg: "Invalid credentials" });
// // // // //         }
// // // // //     } catch (error) {
// // // // //         res.status(400).json({ msg: "Error: " + error.message });
// // // // //     }
// // // // // };

// // // // // module.exports = Login;


// // // // //bcrypt-avatar store
// // // // const jwt = require('jsonwebtoken');
// // // // const bcrypt = require('bcrypt');
// // // // const UserModel = require("../models/usermodel");

// // // // const Login = async (req, res) => {
// // // //     try {
// // // //         const { Email, Password } = req.body;
// // // //         console.log(Email);
// // // //         console.log(Password);
        
        
// // // //         // Check if user exists
// // // //         const userExist = await UserModel.findOne({ Email });
// // // //         console.log(userExist);
        
// // // //         if (!userExist) {
// // // //             return res.status(400).json({ msg: "User not found" });
// // // //         }
        
// // // //         // Compare the provided password with the hashed password in the database
// // // //         const isMatch = await bcrypt.compare(Password.trim(), userExist.Password.trim());
// // // //         if (!isMatch) {
// // // //             return res.status(400).json({ msg: "Invalid credentials" });
// // // //         }

// // // //         // Create JWT payload and sign token
// // // //         const payload = {
// // // //             user: {
// // // //                 id: userExist.id
// // // //             }
// // // //         };
// // // //         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret

// // // //         return res.json({ token, msg: "User login successful" });

// // // //     } catch (error) {
// // // //         res.status(500).json({ msg: "Error: " + error.message });
// // // //     }
    
// // // // };

// // // // module.exports = Login;


// // // //err
// // // const jwt = require('jsonwebtoken');
// // // const bcrypt = require('bcrypt');
// // // const UserModel = require("../models/usermodel");

// // // const Login = async (req, res) => {
// // //     try {
// // //         const { Email, Password } = req.body;

// // //         // Check if user exists
// // //         const userExist = await UserModel.findOne({ Email });
// // //         if (!userExist) {
// // //             return res.status(400).json({ msg: "User not found" });
// // //         }

// // //         // Compare the provided password with the hashed password in the database
// // //         const isMatch = await bcrypt.compare(Password, userExist.Password);
// // //         if (!isMatch) {
// // //             return res.status(400).json({ msg: "Invalid credentials" });
// // //         }

// // //         // Create JWT payload and sign token
// // //         const payload = {
// // //             user: {
// // //                 id: userExist.id
// // //             }
// // //         };
// // //         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

// // //         return res.json({ token, msg: "User login successful" });

// // //     } catch (error) {
// // //         console.error("Login Error:", error);
// // //         res.status(500).json({ msg: "Internal server error." });
// // //     }
// // // };

// // // module.exports = Login;


// // //err
// // const jwt = require('jsonwebtoken');
// // const bcrypt = require('bcrypt');
// // const UserModel = require("../models/usermodel");

// // const Login = async (req, res) => {
// //     try {

        
// //         const { Email, Password } = req.body;

// //         // Check for empty fields
// //         if (!Email || !Password) {
// //             return res.status(400).json({ msg: "Please provide both email and password." });
// //         }

// //         // Check if user exists
// //         const userExist = await UserModel.findOne({ Email });
// //         if (!userExist) {
// //             return res.status(400).json({ msg: "User not found" });
// //         }
        
// //         // Compare provided password with hashed password
// //         const isMatch = await bcrypt.compare(Password, userExist.Password);
// //         if (!isMatch) {
// //             return res.status(400).json({ msg: "Invalid credentials" });
// //         }

// //         // Ensure JWT_SECRET is defined
// //         if (!process.env.JWT_SECRET) {
// //             console.error("JWT_SECRET is not defined in the environment.");
// //             return res.status(500).json({ msg: "Internal server error." });
// //         }

// //         // Create JWT token
// //         const payload = { user: { id: userExist.id } };
// //         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

// //         return res.status(200).json({ token, msg: "User login successful" });

// //     } catch (error) {
// //         console.error("Login Error:", error);
// //         res.status(500).json({ msg: "Internal server error." });
// //     }
// // };

// // module.exports = Login;


// //argon
// const jwt = require('jsonwebtoken');
// const argon2 = require('argon2');
// const UserModel = require("../models/usermodel");

// const Login = async (req, res) => {
//     try {
//         const { Email, Password } = req.body;

//         // Validate input fields
//         if (!Email || !Password) {
//             return res.status(400).json({ msg: "Please provide both email and password." });
//         }

//         // Check if user exists
//         const user = await UserModel.findOne({ Email });
//         if (!user) {
//             return res.status(400).json({ msg: "Invalid email" });
//         }

//         // Verify the password using Argon2
//         const isMatch = await argon2.verify(user.Password, Password);
//         console.log(user.Password);
//         console.log(Password);
        
        
//         if (!isMatch) {
//             return res.status(400).json({ msg: "Invalid password." });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id },
//             process.env.JWT_SECRET,
//             { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
//         );

//         return res.status(200).json({ token, msg: "User login successful." });

//     } catch (error) {
//         console.error("Login Error:", error);
//         res.status(500).json({ msg: "Internal server error. Please try again later." });
//     }
// };

// module.exports = Login;


//login-err
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
            return res.status(400).json({ msg: "Invalid email or password." });
        }

        console.log("Stored Hashed Password:", user.Password);
        console.log("Entered Password:", Password);

        // Verify password using the model's comparePassword method
        const isMatch = await user.comparePassword(Password);
        console.log("Password verification result:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid email or password." });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        return res.status(200).json({ token, msg: "User login successful." });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ msg: "Internal server error. Please try again later." });
    }
};

module.exports = Login;
