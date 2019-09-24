const Hapi = require('hapi'),
      routes = require('./router/userRoutes');
const start = (host,port)=>{
    return new Promise((resolve,reject)=>{
        const server = Hapi.server({port:port,host:host});
        server.route(routes());
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