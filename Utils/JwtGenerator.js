require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (displayName, email) => jwt.sign(
    { displayName, email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' },
);