const router = require('express').Router();
const { login, register } = require('../controllers/user');
const { createUserValidation } = require('../Validations');

router.post('/user', createUserValidation, register);
router.post('/login', login);

module.exports = router;