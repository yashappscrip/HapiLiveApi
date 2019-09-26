const dotenv = require('dotenv/config');
const options = {
  grouping: "tags",
  payloadType: "form",
  host: process.env.HOST || "localhost",
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