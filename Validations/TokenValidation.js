const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error('Token not found');
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    req.tokenData = decoded.email;
    next();
  } catch (error) {
    let errorMessage = error.message;
    if (errorMessage === 'jwt malformed') {
        errorMessage = 'Expired or invalid token';
    } 
    return res.status(401).json({ message: errorMessage });
  }
};
