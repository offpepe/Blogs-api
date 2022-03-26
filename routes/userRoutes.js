const router = require('express').Router();
const { login, register, getUsers } = require('../controllers/user');
const { createUserValidation, loginValidation, tokenValidation } = require('../Validations');

router.post('/login', loginValidation, login);
router.post('/user', createUserValidation, register);
router.get('/user', tokenValidation, getUsers);

module.exports = router;