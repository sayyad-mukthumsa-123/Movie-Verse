const jwt = require('jsonwebtoken');
const UserModel = require("../models/usermodel");

const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const userExist = await UserModel.findOne({ Email });
        if (userExist) {
            if (userExist.Password === Password) {
                const payload = {
                    user: {
                        id: userExist.id
                    }
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret
                return res.json({ token, msg: "User login successful" });
            } else {
                return res.status(400).json({ msg: "Invalid credentials" });
            }
        } else {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        res.status(400).json({ msg: "Error: " + error.message });
    }
};

module.exports = Login;
