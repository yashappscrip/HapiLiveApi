'use strict';
const validator = require('../validator');
const handler = require('../handlers');
const userRegisterValidator = validator.userRegisterValidator;
const loginValidator = validator.loginValidator;
const updateValidator= validator.updateValidator;
const detailsValidator = validator.detailsValidator;
/**
 * This function will be called on getting joi error.
 * @param {*} req 
 * @param {*} res 
 * @param {*} error 
 */
const joiError = (req,res,error)=>{
    // console.log(error);
    return error.isJoi? res.response(error.details[0]).takeover():res.response().takeover();
};
/**
 * User routes will be exported
 */
const routes = ()=>[{
    method : 'POST',
    path : '/register/user',
    options:{
        tags:['api','User','Register'],
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
    path : '/update/{id}',
    options:{
        tags:['api','Signin'],
        description :"Signin API",
        validate:{
            payload: updateValidator,
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
    path : '/details/{id}',
    options:{
        tags:['api','User','Details'],
        description :"Fetch Details API",
        validate:{
            query: detailsValidator,
            failAction: joiError
        },
        handler: handler.commonHandlers.detailsHandler
    }
}];
module.exports= routes;