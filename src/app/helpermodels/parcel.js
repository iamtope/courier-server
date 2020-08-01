const mongoose = require('mongoose');
let Schema = mongoose.Schema;

exports.parcel = new Schema({
    parcelname: String,
    weight: String,
    length: String,
    height: String

}, {
    timestamps: true
});