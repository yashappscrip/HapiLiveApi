var db = require('../../config/db');
const adminModels = require('../../models/admin/admin');
const userModels = require('../../models/user/user')
/**
 * Common handler for user and admin both
 */
const commonHandlers = {
    signinHandler: async (req,res)=>{
        const dbInstance = db.getCollection();
        var result = await adminModels.signinModel(dbInstance,req.payload.email,req.payload.password);
        if(result){
            var type = result.type===1?"Admin":"User"
            return res.response({response:"Success!",message:`Login Successfully as ${type}`}).code(200);
        }
        else{
            return res.response({response:"Error!",message:'Email and password combination not found!'}).code(401);
        }
    },
    detailsHandler:(req,res)=>{},
    updateHandler : async(req,res)=>{
        const dbInstance = db.getCollection();
        const updateItem =  await userModels.updateModel(dbInstance,req.payload);
    }
};
/**
 * User handler
 */
const userHandlers = {
    registerHandler: async (req,res)=>{
        const dbInstance = db.getCollection();
        const item = await userModels.registerModel(dbInstance,req.payload.email,req.payload.firstName,req.payload.lastName,req.payload.phone,req.payload.password);
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
    }
};
/**
 * Admin handlers
 */
const adminHandlers = {
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
    }
};
/**
 * Exports all the handlers
 */
module.exports={
    userHandlers:userHandlers,
    commonHandlers:commonHandlers,
    adminHandlers:adminHandlers 
};