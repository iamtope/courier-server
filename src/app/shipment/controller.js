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
        // let {
        //     originalPrice,
        //     discountPercentage
        // } = req.body;
        // let cost = {
        //     originalPrice: originalPrice,
        //     discountPercentage: discountPercentage,
        //     currentPrice: await globUtil.calculatePercentage(originalPrice, discountPercentage)
        // }

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
        let parcel = {
            parcelname: req.body.parcelname,
            weight: req.body.weight,
            length: req.body.length,
            height: req.body.height
        }
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
        let payload = {
            origin: origin,
            destination: destination,
            // cost: cost,
            parcel: parcel
        }

        // console.log(payload)
        // let shipment = new Shipment({
        //     origin: origin,
        //     destination: destination,
        //     cost: cost,
        //     parcel: parcel
        // });
        console.log(payload)

        await Shipment.create(payload, (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal server error; could not create shipment'
                });
            } else {
                res.status(200).json({
                    message: 'New shipment created!',
                    data: data
                });
            }
        });
        // console.log(shipment)
        // let response = await shipment.save();
        // res.status(200).json({
        //     status: "Success",
        //     data: shipment
        // });

    } catch (err) {
        res.status(500).json({
            status: "Success",
            error: err
        });
        console.log(err)
    }
}