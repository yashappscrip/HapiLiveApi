'use strict';
const dotenv = require('dotenv/config'),
      server = require('./web/server'),
      port = process.env.PORT || 3000,
      host = process.env.HOST || "localhost";
server.start(host,port);
// console.log(configRequire();