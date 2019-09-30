'use strict';
const validator = require('../validator');
const handler = require('../handlers');
const userRegisterValidator = validator.userRegisterValidator;
const loginValidator = validator.loginValidator;
const userUpdateValidator= validator.updateValidator;
const validateHeader = validator.validateHeader;
const detailsValidator = validator.detailsValidator;
/**
 * This function will be called on getting joi error.
 * @param {*} req 
 * @param {*} res 
 * @param {*} error 
 */
const joiError = (req,res,error)=>{
    console.log(error);
    return error.isJoi? res.response(error.details[0]).takeover().code(400):res.response().takeover().code(400);
};
/**
 * User routes will be exported
 */
const routes = [{
    method : 'POST',
    path : '/register/user',
    options:{
        tags:['api','User'],
        description :"User Register API",
        validate:{
            payload: userRegisterValidator,
            failAction: joiError
        },
        handler: handler.userHandlers.registerHandler
    }
},{
    method : 'POST',
    path : '/signin',
    options:{
        tags:['api','Signin'],
        description :"Signin API",
        validate:{
            payload: loginValidator,
            failAction: joiError
        },
        handler:handler.commonHandlers.signinHandler
    }
},{
    method : 'PUT',
    path : '/User/update',
    options:{
        tags:['api','Update'],
        description :"Update API",
        validate:{
            payload: userUpdateValidator,
            failAction: joiError
        },
        handler:handler.commonHandlers.updateHandler
    }
},{
    method : 'POST',
    path : '/logout',
    options:{
        tags:['api','Logout'],
        description :"Logout API",
        handler:handler.commonHandlers.signinHandler
    }
},{
    method : 'GET',
    path : '/details',
    options:{
        tags:['api','User'],
        description :"Fetch Details API",
        validate:{
            query: validateHeader,
            failAction: joiError
        },
        handler: handler.userHandlers.detailsHandler
    }
}];
module.exports= routes;