const mongoose = require('mongoose');
let Schema = mongoose.Schema;

exports.parcel = new Schema({
    items: [{
        parcelname: String,
        weight: String,
        length: String,
        height: String
    }],

}, {
    timestamps: true
});