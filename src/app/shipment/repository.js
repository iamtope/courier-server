const Shipment = require("./model");



exports.shipments = async () => {
    const shipments = await Shipment.find({});
    return shipments;
};

exports.shipmentsById = async id => {
    const shipment = await Shipment.findById(id);
    return shipment;
}

exports.createShipments = async payload => {
    const newShipment = await Shipment.create(payload);
    return newShipment
}