var db = require('../../config/db');
const adminModels = require('../../models/admin/admin');
const userModels = require('../../models/user/user');
const jwtMiddleware = require('../middleware/jwt');
var _token;
/**
 * Common handler for user and admin both
 */
const commonHandlers = {
    /**
     * SignIn API
     */
    signinHandler: async (req,res)=>{
        const dbInstance = db.getCollection();
        var result = await adminModels.signinModel(dbInstance,req.payload.email,req.payload.password);
        if(result){
            var type = result.type===1?"Admin":"User"
            _token = await jwtMiddleware.userMiddleware.getToken(req.payload.email);
            await adminModels.addTokenModel(dbInstance,req.payload.email,_token);
            return res.response({response:"Success!",message:`Login Successfully as ${type}`,token:_token}).code(200);
        }
        else{
            return res.response({response:"Error!",message:'Email and password combination not found!'}).code(401);
        }
    },
    /**
     * Update Details API
     */
    updateHandler : async(req,res)=>{
        const dbInstance = db.getCollection();
        const updateItem =  await userModels.updateModel(dbInstance,req.payload);
        return res.response(updateItem).code(200);
    }
};
/**
 * User handler
 */
const userHandlers = {
    /**
     * User Register API
     */
    registerHandler: async (req,res)=>{
        const dbInstance = db.getCollection();
        const item = await userModels.registerModel(dbInstance,req.payload.email,req.payload.firstName,req.payload.lastName,req.payload.phone,req.payload.password);
        if(item){
            return res.response({
                response:"Success!",
                message:"Registered successfully"
            }).code(200);
        }
        else{
            return res.response({
                response:"Error!",
                message:"Something went wrong!"
            }).code(400);
        }
    },
    /**
     * Details API
     */
    detailsHandler:async(req,res)=>{
        const dbInstance = db.getCollection();
        // if(req.headers.authorizationToken){
            var decryptedData = await jwtMiddleware.userMiddleware.getData(req.query.authorization);
            if(decryptedData.code===200){
                var details = await userModels.getDetailsModel(dbInstance,decryptedData.email,req.query.authorization);
                return res.response({"response":"Success!",details:details}).code(200);
            }
            else{
                return res.response({"response":"Error!",message:"Token not valid!"}).code(400);
            }
    },
};
/**
 * Admin handlers
 */
const adminHandlers = {
    /**
     * Admin Register API
     */
    registerHandler: async (req,res)=>{
        const dbInstance = db.getCollection();
        const item = await adminModels.registerModel(dbInstance,req.payload.email,req.payload.firstName,req.payload.lastName,req.payload.phone,req.payload.password);
        if(item._id){
            return res.response({
                response:"Success!",
                message:"Registered successfully"
            }).code(200);
        }
        else{
            return res.response({
                response:"Error!",
                message:"Something went wrong!"
            }).code(400);
        }
    },
    /**
     * Details API
     */
    detailsHandler:async(req,res)=>{
        const dbInstance = db.getCollection();
        var details = await userModels.getDetailsModel(dbInstance,req.payload.mail);
        res.response({"response":"Success!",details:details});
    },
};
/**
 * Exports all the handlers
 */
module.exports={
    userHandlers:userHandlers,
    commonHandlers:commonHandlers,
    adminHandlers:adminHandlers,
    _token:_token 
};