var db = require('../../config/db');
var returnData;
const signinModel = async (dbInstance,email,pwd)=>{
    var loginData = dbInstance.findOne({email:email,password:pwd},{projection:{password:0}});
    await loginData.then((data)=>{
        returnData = data;
    }).catch((err)=>{
        returnData = err;
    });
    return returnData;
};
const registerModel = async (dbInstance,email,firstName,lastName,phone,pwd)=>{
    var loginData = dbInstance.insertOne({email:email,firstName:firstName,lastName:lastName,phone:parseInt(phone),password:pwd,type:1});
    await loginData.then((data)=>{
        returnData = data;
    }).catch((err)=>{
        returnData = err;
    });
    return returnData;
};
module.exports={
    signinModel:signinModel,
    registerModel:registerModel
};