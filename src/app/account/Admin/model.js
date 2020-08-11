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
  phone_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  // ---------- this is for reset password---------
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpirationDate: {
    type: Date
  },
  // referralCode: {
  //   type: String,
  //   unique: true
  // },
  // referredCount: {
  //   type: Number
  // }


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

module.exports = mongoose.model("User", adminSchema);
adminSchema.plugin(uniqueValidator, {
  message: '{PATH} Already in use'
});