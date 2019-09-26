const Hapi = require('hapi'),
      userRoutes = require('./router').userRoutes,
      adminRoutes = require('./router').adminRoutes,
      swagger = require('./middleware/swagger'),
      inert = require('@hapi/inert'),
      vision = require('@hapi/vision'),
      goodConsole = require('./middleware/good'),
      good = require('@hapi/good');
const start =  (host,port)=>{
    return new Promise( async (resolve,reject)=>{
        const server = Hapi.server({port:port,host:host});
        server.route(userRoutes(),adminRoutes());
        await server.register([swagger].concat(inert,vision));
        server.start((err)=>{
            return reject(err);
        });
        console.log(`Server started at: ${server.info.uri}`);
        resolve();
    });
};
module.exports={
    start
};