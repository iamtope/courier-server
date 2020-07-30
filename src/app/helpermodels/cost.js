const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

let costSchema;

export default costSchema = new mongoose.Schema({
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