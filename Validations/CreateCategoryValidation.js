const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
});

module.exports = (req, res, next) => {
    try {
        const { name } = req.body;
        const { error } = schema.validate({ name });
        if (error) throw new Error(error.message);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};