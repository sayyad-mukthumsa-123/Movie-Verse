// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {
//     try {
//         const token = req.headers['x-token']; 
//         console.log("Token: " + token);
//         if (!token) {
//             return res.status(400).json({ msg: "Token not found" });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET); 
//         req.user = decoded.user;
//         next();
//     } catch (error) {
//         return res.status(400).json({ msg: "Error: " + error.message });
//     }
// };


const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["x-token"] || req.header("Authorization")?.replace("Bearer ", ""); // Check for token in both headers
    if (!token) {
      return res.status(401).json({ msg: "Access denied, token missing!" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Decoded token should contain `email`
    next();
  } catch (error) {
    console.error("Token error:", error);
    return res.status(400).json({ msg: "Invalid token" });
  }
};
