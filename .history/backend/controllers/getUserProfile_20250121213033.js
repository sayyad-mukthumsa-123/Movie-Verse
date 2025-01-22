// profileController.js
const UserModel = require("../models/usermodel");

const getUserProfile = async (req, res) => {
    try {
        // Extract email from the request (it's assumed to be included in the token)
        const userEmail = req.user.email;  // user info from the middleware

        const user = await UserModel.findOne({ Email: userEmail }).select('-Password');  // Exclude password
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        
        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ msg: "Error: " + error.message });
    }
};

module.exports = getUserProfile;
