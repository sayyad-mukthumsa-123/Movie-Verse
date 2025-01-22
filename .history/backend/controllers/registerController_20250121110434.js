// const jwt = require('jsonwebtoken');
// const UserModel = require("../models/usermodel");

// const Register = async (req, res) => {
//     try {
//         const { Username, Email, Password, ConfirmPassword } = req.body;

//         const trimmedPassword = Password;
//         const trimmedConfirmPassword = ConfirmPassword;

//         if (trimmedPassword !== trimmedConfirmPassword) {
//             return res.status(400).json({ msg: "Password and ConfirmPassword don't match" });
//         }
//         const userExist = await UserModel.findOne({ Email });

//         if (!userExist) {
//             let newUser = new UserModel({ Username, Email, Password: trimmedPassword });
//             await newUser.save();

//             const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//             return res.status(200).json({ token, msg: "User registered successfully" });
//         }

//         return res.status(400).json({ msg: "Email already exists" });

//     } catch (error) {
//         return res.status(400).json({ msg: "Error: " + error });
//     }
// }

// module.exports = Register;


//avatar store
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require("../models/usermodel");

const Register = async (req, res) => {
    try {
        const { Username, Email, Password, ConfirmPassword, Avatar } = req.body;

        if (!Username || !Email || !Password || !ConfirmPassword || !Avatar) {
            return res.status(400).json({ msg: "All fields are required." });
        }

        // Check if passwords match
        if (Password !== ConfirmPassword) {
            return res.status(400).json({ msg: "Password and ConfirmPassword don't match." });
        }

        // Check if the user already exists
        const userExist = await UserModel.findOne({ Email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create a new user
        const newUser = new UserModel({
            Username,
            Email,
            Password: hashedPassword,
            Avatar
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token, msg: "User registered successfully." });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ msg: "Internal server error. Please try again later." });
    }
};

module.exports = Register;
