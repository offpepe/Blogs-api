const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
}).required();

module.exports = (req, res, next) => {
    try {
        const { title, content } = req.body;
        const { error } = schema.validate({ title, content });
        if (error) throw new Error(error.message);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};