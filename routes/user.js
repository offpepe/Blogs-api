const router = require('express').Router();
const { 
    login,
    register,
    getUsers,
    getUserById,
    deleteUserByEmail,
} = require('../controllers/user');
const { createUserValidation, loginValidation, tokenValidation } = require('../Validations');

router.post('/login', loginValidation, login);
router.post('/user', createUserValidation, register);
router.get('/user', tokenValidation, getUsers);
router.get('/user/:id', tokenValidation, getUserById);
router.delete('/user/me', tokenValidation, deleteUserByEmail);

module.exports = router;