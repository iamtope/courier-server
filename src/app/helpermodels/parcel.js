const mongoose = require('mongoose');

let parcelSchema;

export default parcelSchema = new mongoose.Schema({
    item: {
        parcelname: String,
        weight: String,
        length: String,
        height: String
    },

}, {
    timestamps: true
});