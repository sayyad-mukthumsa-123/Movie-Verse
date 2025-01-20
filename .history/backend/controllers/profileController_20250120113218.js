

//for profile
const UserModel = require("../models/usermodel");

// Get profile
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming `req.user` is populated via middleware
    const user = await UserModel.findById(userId).select("-Password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { Username, Email } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { Username, Email },
      { new: true, runValidators: true }
    ).select("-Password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getProfile, updateProfile };
