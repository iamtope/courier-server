const mongoose = require('mongoose');

let recieverAddressSchema;

export default recieverAddressSchema = new mongoose.Schema({
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