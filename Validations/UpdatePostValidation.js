const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
}).required();

module.exports = (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        if (categoryIds) throw new Error('Categories cannot be edited');
        const { error } = schema.validate({ title, content });
        if (error) throw new Error(error.message);
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};