const mongoose = require('mongoose');

import addressSchema from '../helpermodels/address';
import costSchema from '../helpermodels/cost';
const Schema = mongoose.Schema;

export const shipmentSchema = new Schema({
    origin: addressSchema,
    destination: addressSchema,
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    },
    status: String,
    assignedTimestamp: Date,
    pickedUpTimestamp: Date,
    deliveredTimestamp: Date,
    cost: costSchema,

}, {
    timestamps: true
});

module.exports = mongoose.model('Shipment', shipmentSchema);