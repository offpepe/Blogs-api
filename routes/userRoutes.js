const router = require('express').Router();
const { login, register } = require('../controllers/user');
const { createUserValidation, loginValidation } = require('../Validations');

router.post('/user', createUserValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;