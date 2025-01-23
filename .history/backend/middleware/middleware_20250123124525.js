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


// Middleware to authenticate the user via token
const middleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
  
    if (!token) {
      return res.status(401).json({ msg: "Access denied, token missing!" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Add the decoded user info to the request
      next();
    } catch (error) {
      return res.status(400).json({ msg: "Invalid token" });
    }
  };
  