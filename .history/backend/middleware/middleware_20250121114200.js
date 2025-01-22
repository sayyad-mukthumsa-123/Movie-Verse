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


//avatar-get
// middleware.js
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const token = req.headers['authorization']?.replace("Bearer ", ""); // Token extraction from Authorization header
    if (!token) {
      return res.status(400).json({ msg: "Token not found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT verification
    req.user = decoded; // Attach the user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ msg: "Invalid token" }); // Token validation failure
  }
};
