const env = process.env.NODE_ENV || "development";
const mongoUrl = `mongodb+srv://admin:1Password-@cluster0.5nms6.mongodb.net/woloni?retryWrites=true&w=majority`

const config = require(`./environments/${env.toLowerCase()}`); // eslint-disable-line import/no-dynamic-require
module.exports = config;