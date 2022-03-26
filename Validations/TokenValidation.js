const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new Error('Token not found');
    console.log(JWT_SECRET);
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    let errorMessage = error.message;
    if (errorMessage === 'jwt malformed') {
        errorMessage = 'Expired or invalid token';
    } 
    return res.status(401).json({ errorMessage });
  }
};
