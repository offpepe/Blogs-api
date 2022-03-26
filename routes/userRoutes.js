const router = require('express').Router();
const controller = require('../controllers/user');
const { createUserValidation } = require('../Validations');

router.post('/user', createUserValidation, controller.register);

module.exports = router;