var mongoutil = require('../../config/db')
var db;
mongoutil.connectDB(()=>{
    db =  mongoutil.getDB();
    // console.log(db)
    // collection = db.Collection('userDetails');
});
/**
 * Common handler for user and admin both
 */
const commonHandlers = {
    signinHandler:(req,res)=>{
        console.log("Asas"+db);
        return res.response({
            response: "Success!",
            message : "Sign in successfully!",
            db:db
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