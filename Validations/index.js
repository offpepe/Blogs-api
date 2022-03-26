const createUserValidation = require('./CreateUserValidation');
const loginValidation = require('./LoginValidation');
const tokenValidation = require('./TokenValidation');
const CreateCategoryValidation = require('./CreateCategoryValidation');
const CreatePostValidation = require('./CreatePostValidation');

module.exports = {
    createUserValidation,
    loginValidation,
    tokenValidation,
    CreateCategoryValidation,
    CreatePostValidation,
};