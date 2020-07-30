const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name: String,
    email: String,
    number: String,
    shipments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Driver', driverSchema);