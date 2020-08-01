const globUtil = require('../../utilities/index')
const shipmentRepository = require('./repository')
exports.getAllShipments = async (req, res) => {
    try {
        let response = await shipmentRepository.shipments()
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
        let response = await shipmentRepository.shipmentsById(id)
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
            originalPrice: originalPrice,
            discountPercentage: discountPercentage,
            currentPrice: await globUtil.calculatePercentage(originalPrice, discountPercentage)
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
        let item = [{
            parcelname: req.body.parcelname,
            weight: req.body.weight,
            length: req.body.length,
            height: req.body.height
        }]

        let destination = {
            recieverName: req.body.recieverName,
            recieverCompanyName: req.body.recieverCompanyName,
            recieverAddress: req.body.recieverAddress,
            recieverPostalCode: req.body.recieverPostalCode,
            recieverCity: req.body.recieverCity,
            recieverCountry: req.body.recieverCountry,
            recieverEmail: req.body.recieverEmail,
            recieverPhone: req.body.recieverPhone
        }
        let items = items.push

        let payload = {
            origin: origin,
            destination: destination,
            cost: cost,
            user: req.body.user,
        }


        console.log(items)

        let shipment = await shipmentRepository.createShipments({
            ...payload,
            $push: {
                items: item
            }
        });
        res.status(200).json({
            status: "Success",
            data: shipment
        });

    } catch (err) {
        res.status(500).json({
            status: "Success",
            error: err
        });
        console.log(err)
    }
}