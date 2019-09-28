const joi = require('@hapi/joi');
const adminRegisterValidator = {
    firstName: joi.string()
                .required()
                .description("Admin First Name"),
    lastName: joi.string()
                .required()
                .description("Admin Last Name"),
    email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } })
            .required()
            .description("User Name"),
    phone: joi.number()
            .max(10)
            .min(10)
            .required()
            .description("Phone No."),
    password: joi.string()
                .regex(/^[a-zA-Z0-9]{3,30}$/)
                .required()
                .description("Password"),
    confirmPassword: joi.ref('password')
};
const userRegisterValidator = {
    firstName: joi.string()
                .required()
                .description("Admin First Name"),
    lastName: joi.string()
                .required()
                .description("Admin Last Name"),
    email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } })
            .required()
            .description("User Name"),
    phone: joi.number()
            .max(10)
            .min(10)
            .required()
            .description("Phone No."),
    password: joi.string()
                .regex(/^[a-zA-Z0-9]{3,30}$/)
                .required()
                .description("Password"),
    confirmPassword: joi.ref('password')
};
const loginValidator = {
    email : joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required()
                .description("Email"),
    password : joi.string()
                .regex(/^[a-zA-Z0-9]{3,30}$/)
                .required()
                .description("Password")
};
const updateValidator = {
    firstName: joi.string()
                .optional()
                .description("Admin First Name"),
    lastName: joi.string()
                .optional()
                .description("Admin Last Name"),
    phone: joi.number()
            .max(10)
            .min(10)
            .optional()
};
const detailsValidator = {
    email : joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required()
                .description("User Email"),
};
module.exports={
    adminRegisterValidator:adminRegisterValidator,
    userRegisterValidator:userRegisterValidator,
    loginValidator:loginValidator,
    updateValidator:updateValidator,
    detailsValidator:detailsValidator
};