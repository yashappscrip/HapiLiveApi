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
    var originalData = dbInstance.findOne({authToken:payload.authorization});
    await originalData.then((data)=>{
        if(data){
            var updateData = dbInstance.update({authToken:payload.authorization},{$set:{firstName:payload.firstName?payload.firstName:data.firstName,lastName:payload.lastName?payload.lastName:data.lastName,phone:payload.phone?payload.phone:data.phone}});
            updateData.then((data)=>{
                if(data._id) returnData = data;
            }).catch((err)=>{
                returnData = err;
            });
        }
        else{
            console.log("Token error!")
            returnData = "Token not valid!";
        }
    }).catch((err)=>{
        returnData = err;
        console.log(err);
    });
    console.log("Error!")
    return returnData;
}
const getDetailsModel = async (dbInstance,email,authToken)=>{
    var dataReturn =  dbInstance.findOne({email:email,authToken:authToken},{projection:{password:0,type:0,_id:0,authToken:0}});
    await dataReturn.then((data)=>{
      returnData=data;  
    }).catch((err)=>{
        returnData = err;
    });
    return returnData;
};
module.exports={
    registerModel:registerModel,
    updateModel:updateModel,
    getDetailsModel:getDetailsModel
};