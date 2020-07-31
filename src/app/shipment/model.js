const mongoose = require('mongoose');

const originAddress = require('../helpermodels/originAddress');
const destinationAddress = require('../helpermodels/destinationAddress');
const costSchema = require('../helpermodels/cost');
const parcelSchema = require('../helpermodels/parcel')
const Schema = mongoose.Schema;

const status = ['created', 'under_review', 'asigned', 'departed', 'arrived', 'ready_for_pickup', 'delivered'];
export const shipmentSchema = new Schema({
    origin: originAddress,
    destination: destinationAddress,
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: parcelSchema,
    status: {
        type: String,

        default: "created",
        enum: status
    },
    assignedTimestamp: Date,
    pickedUpTimestamp: Date,
    deliveredTimestamp: Date,
    cost: costSchema,

}, {
    timestamps: true
});

module.exports = mongoose.model('Shipment', shipmentSchema);