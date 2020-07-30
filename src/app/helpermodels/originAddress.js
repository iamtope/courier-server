const mongoose = require('mongoose');

let addressSchema;

export default addressSchema = new mongoose.Schema({
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