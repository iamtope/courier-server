const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.origin = new Schema({
    senderName: String,
    senderCompanyName: String,
    senderAddress: String,
    senderPostalCode: String,
    senderCity: String,
    senderCountry: String,
    senderEmail: String,
    senderPhone: String
}, {
    timestamps: true
});