const jwt = require('jsonwebtoken');
const UserModel = require("../models/usermodel");

const Register = async (req, res) => {
    try {
        const { Username, Email, Password, ConfirmPassword } = req.body;

        const trimmedPassword = Password;
        const trimmedConfirmPassword = ConfirmPassword;

        if (trimmedPassword !== trimmedConfirmPassword) {
            return res.status(400).json({ msg: "Password and ConfirmPassword don't match" });
        }
        const userExist = await UserModel.findOne({ Email });

        if (!userExist) {
            let newUser = new UserModel({ Username, Email, Password: trimmedPassword });
            await newUser.save();

            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({ token, msg: "User registered successfully" });
        }

        return res.status(400).json({ msg: "Email already exists" });

    } catch (error) {
        return res.status(400).json({ msg: "Error: " + error });
    }
}

module.exports = Register;
