const bcrypt = require('bcrypt');
const UserModel = require('../models/usermodel');

// Reset Password Controller
const resetPassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if the current password matches the stored password
    const isMatch = await bcrypt.compare(currentPassword, user.Password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Current password is incorrect' });
    }

    // Check if the new password is different from the old one
    if (currentPassword === newPassword) {
      return res.status(400).json({ msg: 'New password cannot be the same as the current password' });
    }

    // Hash the new password and save it to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    user.Password = hashedPassword;
    await user.save();

    res.json({ msg: 'Password updated successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = resetPassword;
