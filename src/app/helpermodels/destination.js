const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.destination = new Schema({
    recieverName: String,
    recieverCompanyName: String,
    recieverAddress: String,
    recieverPostalCode: String,
    recieverCity: String,
    recieverCountry: String,
    recieverEmail: String,
    recieverPhone: String
}, {
    timestamps: true
});