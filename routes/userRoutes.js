const router = require('express').Router();
const { login, register, getUsers } = require('../controllers/user');
const { createUserValidation, loginValidation } = require('../Validations');

router.post('/login', loginValidation, login);
router.post('/user', createUserValidation, register);
router.get('/user', getUsers);

module.exports = router;