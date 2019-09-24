const joi = require('joi');
const adminRegisterValidator = {
    firstName: joi.string().required(),
    lastName: joi.string().required()
};
const userRegisterValidator = {};
module.exports={
    adminRegisterValidator:adminRegisterValidator,
    userRegisterValidator:userRegisterValidator
};