const router = require('express').Router();
const { login, register, getUsers, getUserById } = require('../controllers/user');
const { createUserValidation, loginValidation, tokenValidation } = require('../Validations');

router.post('/login', loginValidation, login);
router.post('/user', createUserValidation, register);
router.get('/user', tokenValidation, getUsers);
router.get('/user/:id', tokenValidation, getUserById);

module.exports = router;