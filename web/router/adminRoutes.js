'use strict';
const validator = require('../validator');
const handler = require('../handlers');
const adminRegisterValidator = validator.adminRegisterValidator;
/**
 * This function will be called on getting joi error.
 * @param {*} req 
 * @param {*} res 
 * @param {*} error 
 */
const joiError = (req,res,error)=>{
    return error.isJoi? res.response(error.details[0]).takeover():res.response().takeover();
};
/**
 * Admin routes will be exported
 */
const routes =[
    {
    method : 'POST',
    path : '/register/admin',
    options:{
        tags:['api','Admin'],
        description :"Admin Register API",
        validate:{
            payload:{
                adminRegisterValidator
            },
            failAction: joiError
        },
        handler: handler.adminHandlers.registerHandler
    }
},
{
    method : 'GET',
    path : '/details/{id}',
    options:{
        tags:['api','Admin'],
        description :"Fetch Details API",
        // headers:{
        //     authorizationToken: handler._token 
        // },
        // validate:{
        //     query: detailsValidator,
        //     failAction: joiError
        // },
        handler: handler.adminHandlers.detailsHandler
    }
}];
module.exports= routes;