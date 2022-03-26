const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/user', controller.register);

module.exports = router;