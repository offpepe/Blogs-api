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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await service.login(email, password);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
};