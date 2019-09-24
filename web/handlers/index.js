const userHandlers = {
    registerHandler: (req,res)=>{
        res.response({
            response:"Success!",
            message:"Registered successfully!"
        }).code(200);
    }
};
module.exports={
    userHandlers:userHandlers
};