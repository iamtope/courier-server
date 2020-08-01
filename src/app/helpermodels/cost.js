const mongoose = require('mongoose');
const Schema = mongoose.Schema;


exports.cost = new Schema({
    originalPrice: {
        type: String,
    },
    discountPercentage: {
        type: Number,
    },
    currentPrice: {
        type: Number,
    },
}, {
    timestamps: true
});