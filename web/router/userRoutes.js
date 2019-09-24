'use strict';
const validator = require('../validator');
const handler = require('../handlers');
const userRegisterValidator = validator.userRegisterValidator;
const adminRegisterValidator = validator.adminRegisterValidator;
const joiError = (req,res,error)=>{
    return error.isJoi? res.response(error.details[0]).takeover():res.response().takeover();
};
const routes = ()=>[{
    method : 'POST',
    path : '/register/user',
    config:{
        validate:{
            payload:{
                userRegisterValidator
            },
            failAction: joiError
        },
        handler:handler.userHandlers.registerHandler
    }
},{
    method : 'POST',
    path : '/register/admin',
    config:{
        validate:{
            payload:{
                adminRegisterValidator
            },
            failAction: joiError
        },
        handler:handler.adminHandlers.registerHandler
    }
},{
    method : 'GET',
    path : '/details/{id}',
    config:{
        validate:{
            query:{
                adminRegisterValidator
            },
            failAction: joiError
        },
        handler:handler.adminHandlers.registerHandler
    }
}];
module.exports= routes;