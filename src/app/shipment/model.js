const mongoose = require('mongoose');

const origin = require('../helpermodels/origin');
const destination = require('../helpermodels/destination');
const cost = require('../helpermodels/cost');
const parcel = require('../helpermodels/parcel')
const Schema = mongoose.Schema;

const status = ['created', 'under_review', 'asigned', 'departed', 'arrived', 'ready_for_pickup', 'delivered'];
export const shipmentSchema = new Schema({
    origin: origin.origin,
    destination: destination.destination,
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: parcel.parcel,
    status: {
        type: String,

        default: "created",
        enum: status
    },
    // assignedTimestamp: Date,
    // pickedUpTimestamp: Date,
    // deliveredTimestamp: Date,
    cost: cost.cost,

}, {
    timestamps: true
});

module.exports = mongoose.model('Shipment', shipmentSchema);