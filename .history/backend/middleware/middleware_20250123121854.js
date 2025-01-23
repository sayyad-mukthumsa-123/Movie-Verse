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


//rr
const jwt = require('jsonwebtoken');

const middleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing or invalid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
    req.user = decoded; // Attach user info to the request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = middleware;
