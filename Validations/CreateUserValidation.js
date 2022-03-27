const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).max(256).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().uri(),
});

module.exports = (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    Joi.assert({ displayName, email, password, image }, schema);
    next();
  } catch (error) {
      return res.status(400).json({ message: error.details[0].message });
  }
};
