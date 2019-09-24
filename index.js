'use strict';
const configRequire = require('./config');
const server = require('./web/server'),
      port = process.env.port || 3000,
      host = process.env.host || "localhost";
server.start(host,port);
const collection = configRequire().then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
});
// console.log(configRequire();