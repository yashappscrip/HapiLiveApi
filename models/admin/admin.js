const configRequire = require('../config');
const collection = configRequire().then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
});