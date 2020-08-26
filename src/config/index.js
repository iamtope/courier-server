require("dotenv/config");
const env = process.env.NODE_ENV ? "development" : "production";

const config = require(`./environments/${env.toLowerCase()}`); // eslint-disable-line import/no-dynamic-require

module.exports = config;
