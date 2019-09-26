var mongoutil = require('../../config/db')
var collection
mongoutil.connectDB(()=>{
    var db =  mongoutil.getDB();
    collection = db.collection('userDetails');
});
/**
 * Common handler for user and admin both
 */
const commonHandlers = {
    signinHandler:(req,res)=>{
        console.log("Asas"+collection.findOne({}));
        return res.response({
            response: "Success!",
            message : "Sign in successfully!"
        });
    },
    detailsHandler:(req,res)=>{}
};
/**
 * User handler
 */
const userHandlers = {
    registerHandler: (req,res)=>{
        res.response({
            response:"Success!",
            message:"Registered successfully!"
        }).code(200);
    }
};
/**
 * Admin handlers
 */
const adminHandlers = {
    registerHandler: (req,res)=>{}
};
/**
 * Exports all the handlers
 */
module.exports={
    userHandlers:userHandlers,
    commonHandlers:commonHandlers,
    adminHandlers:adminHandlers 
};