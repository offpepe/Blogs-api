const createUserValidation = require('./CreateUserValidation');
const loginValidation = require('./LoginValidation');
const tokenValidation = require('./TokenValidation');
const CreateCategoryValidation = require('./CreateCategoryValidation');
const CreatePostValidation = require('./CreatePostValidation');
const UpdatePostValidation = require('./UpdatePostValidation');

module.exports = {
    createUserValidation,
    loginValidation,
    tokenValidation,
    CreateCategoryValidation,
    CreatePostValidation,
    UpdatePostValidation,
};