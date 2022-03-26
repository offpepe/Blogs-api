const service = require('../services/user');

const register = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const userCreated = await service.register(displayName, email, password, image);
        return res.status(201).json({ token: userCreated });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

module.exports = {
    register,
};