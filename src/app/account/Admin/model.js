const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;


const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
 
  email: {
    type: String,
    required: true,
    unique: true
  },
 
 

}, {
  timestamps: true,
});


adminSchema.methods.hashPassword = async (password) => {
  return await bcrypt.hashSync(password, 10);
}

adminSchema.methods.compareUserPassword = async (inputtedPassword, hashedPassword) => {
  return await bcrypt.compare(inputtedPassword, hashedPassword)
}
adminSchema.methods.generateJwtToken = async (payload, secret, expires) => {
  return jwt.sign(payload, secret, expires)
}

module.exports = mongoose.model("Admin", adminSchema);
adminSchema.plugin(uniqueValidator, {
  message: '{PATH} Already in use'
});