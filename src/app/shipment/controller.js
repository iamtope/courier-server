const Shipment = require("./model");
const globUtil = require('../../utilities/index')

exports.getAllShipments = async (req, res) => {
    try {
        const response = await Shipment.find({});
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        console.log(err)
    }
}


exports.getShipmentById = async (req, res) => {
    try {
        let id = req.params.id
        const response = await Shipment.findById(id);
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        console.log(err)
    }
}

exports.createShipment = async (req, res) => {
    try {
        let {
            originalPrice,
            discountPercentage
        } = req.body;

        let cost = {
            originalPrice = originalPrice,
            discountPercentage = discountPercentage,
            currentPrice = globUtil.calculatePercentage(originalPrice, discountPercentage)
        }
        let origin = {
            senderName: req.body.senderName,
            senderCompanyName: req.body.senderCompanyName,
            senderAddress: req.body.senderAddress,
            senderPostalCode: req.body.senderPostalCode,
            senderCity: req.body.senderCity,
            senderCountry: req.body.senderCountry,
            senderEmail: req.body.senderEmail,
            senderPhone: req.body.senderPhone
        }

    } catch (err) {

    }
}