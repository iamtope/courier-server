const Shipment = require("./model");

exports.shipments = async () => {
    const shipments = await Shipment.find().populate('driver');
    return shipments;
};

exports.shipmentsById = async id => {
    const shipment = await Shipment.findById(id).populate('user');
    return shipment;
}

exports.createShipments = async payload => {
    const newShipment = await Shipment.create(payload);
    return newShipment
}

exports.update = async (id, body) => {
    const shipment = await Shipment.findByIdAndUpdate(id, body, {
        useFindAndModify: false,
        new: true,
    });
    if (!shipment) {
        throw new Error('Shipment not updated');
    }
    return shipment
};

exports.modifyShipment = async (id, body) => {
    const shipment = await Shipment.findByIdAndUpdate(id, body, {
        if (err) {
            throw err
        }
    })
    if (!shipment) {
        throw new Error('Shipment not updated');
    }
    return shipment
}