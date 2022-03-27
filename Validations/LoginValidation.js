const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().empty().required()
    .messages({
        'string.empty': '"email" is not allowed to be empty',
        'any.required': '"email" is required',
        'string.email': '"email" must be a valid email',
    }),
    password: Joi.string().min(6).empty().required()
    .messages({
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required',
        'string.min': '"password" length must be 6 characters long',
    }),
});

module.exports = (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { error } = schema.validate({ email, password });
        if (error) throw new Error(error.message);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};