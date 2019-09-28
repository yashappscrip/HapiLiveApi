const dotenv = require('dotenv/config');
const options = {
  grouping: "tags",
  payloadType: "form",
  host: process.env.SWAGGER_HOST || "localhost:4000",
  info: {
    contact: {
      name: "Yash Chandani",
      email: "yash@mobifyi.com"
    }
  }
};

module.exports = {
  plugin: require("hapi-swagger"),
  options
};