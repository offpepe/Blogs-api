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

const getUsers = async (_req, res) => {
    const users = await service.getUsers();
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;    
        const user = await service.getUserById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
    getUsers,
    getUserById,
};