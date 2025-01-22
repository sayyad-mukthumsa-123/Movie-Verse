// const jwt = require('jsonwebtoken');
// const UserModel = require("../models/usermodel");

// const Login = async (req, res) => {
//     try {
//         const { Email, Password } = req.body;
//         const userExist = await UserModel.findOne({ Email });
//         if (userExist) {
//             if (userExist.Password === Password) {
//                 const payload = {
//                     user: {
//                         id: userExist.id
//                     }
//                 };
//                 const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret
//                 return res.json({ token, msg: "User login successful" });
//             } else {
//                 return res.status(400).json({ msg: "Invalid credentials" });
//             }
//         } else {
//             return res.status(400).json({ msg: "Invalid credentials" });
//         }
//     } catch (error) {
//         res.status(400).json({ msg: "Error: " + error.message });
//     }
// };

// module.exports = Login;


//bcrypt-avatar store
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require("../models/usermodel");

const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Check if user exists
        const userExist = await UserModel.findOne({ Email });
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(Password, userExist.Password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Create JWT payload and sign token
        const payload = {
            user: {
                id: userExist.id
            }
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret

        return res.json({ token, msg: "User login successful" });

    } catch (error) {
        res.status(500).json({ msg: "Error: " + error.message });
    }
    // loginController.js (update the payload)
    const payload = {
        user: {
            id: userExist.id,
            email: userExist.Email,  // Include email in the token
        }
    };

};

module.exports = Login;
