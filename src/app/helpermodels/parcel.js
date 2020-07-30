const mongoose = require('mongoose');

let parcelSchema;

export default addressSchema = new mongoose.Schema({
    items: [{
        name: String,
        weight: String,
        length: String,
        height: String,

    }],

}, {
    timestamps: true
});