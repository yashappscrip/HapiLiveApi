const jwt = require('jsonwebtoken');
var returnData;
const registerModel = async (dbInstance,email,firstName,lastName,phone,pwd)=>{
    var loginData = dbInstance.insertOne({email:email,firstName:firstName,lastName:lastName,phone:parseInt(phone),password:pwd,type:2});
    await loginData.then((data)=>{
        returnData = data;
    }).catch((err)=>{
        returnData = err;
    });
    return returnData;
};
const updateModel = async (dbInstance,payload)=>{
    var originalData = dbInstance.findOne({email:email});
    originalData.then((data)=>{
        var updateData = dbInstance.update({email:email},{firstName:payload.firstName?payload.firstName:data.firstName,lastName:payload.lastName?payload.lastName:data.lastName,phone:payload.phone?payload.phone:data.phone});
        updateData.then((data)=>{
            if(data._id) returnData = data;
        }).catch((err)=>{
            returnData = err;
        });
    }).catch((err)=>{
        returnData = err;
    });
}
module.exports={
    registerModel:registerModel,
    updateModel:updateModel
};