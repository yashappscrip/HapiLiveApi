const jwt = require('jsonwebtoken');
require('dotenv/config');
const userMiddleware={
    loginMiddleware:()=>{

    },
    getToken:(document)=>{
        return jwt.sign({document},process.env.SECRET_TOKEN);
    },
    getData:(token)=>{
        return jwt.verify(token,process.env.SECRET_TOKEN,(err,data)=>{
            if(err) return {code:400};
            else return {code:200,email:data.document};
        });
    }
};
module.exports={
    userMiddleware:userMiddleware
};