const Hapi = require('hapi'),
      userRoutes = require('./router').userRoutes,
      adminRoutes = require('./router').adminRoutes,
      swagger = require('./middleware/swagger'),
      inert = require('@hapi/inert'),
      vision = require('@hapi/vision'),
      goodConsole = require('./middleware/good'),
      good = require('@hapi/good');
var mongoutil = require('../config/db')
var db;
const start =  (host,port)=>{
    return new Promise( async (resolve,reject)=>{
        const server = Hapi.server({port:port,host:host});
        server.route(userRoutes(),adminRoutes());
        await server.register([swagger].concat(inert,vision));
        server.start((err)=>{
            return reject(err);
        });
        console.log(`Server started at: ${server.info.uri}`);
        mongoutil.connectDB().then((msg)=>{
            console.log("Db established!");
        }).catch((err)=>{
            console.log("Error while connection with db!");
        });
        resolve();
    });
};
module.exports={
    start
};