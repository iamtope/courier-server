const globUtil = require('../../utilities/index')
const shipmentRepository = require('./repository')
const Driver = require('../driver/model')
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
        let items = {
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
            cost: cost,
            items: items,
            user: req.body.user,
            driver: null
        }
        let shipment = await shipmentRepository.createShipments({
            ...payload
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

exports.updateShipment = async (req, res) => {
    try {
        let id = req.params.id
        let response = await shipmentRepository.updateShipment(id, {
            $set: req.body //this is capable of assigning of driver, changing of status,canceling of order
        });
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        res.status(500).json({
            status: "Success",
            error: err
        });
        console.log(err)
    }
}


// exports.assignShipmentToDriver = async(req, res) => {
//     try {
//         const { params: {id}, body: {driver_id, status} } = req;
//         console.log(id);
//         console.log("driver id", driver_id);
//         console.log('status is ', status)
//         const body = {
//             driver: driver_id,
//             status
//         }
//         console.log(body);
    
//         const response = await shipmentRepository.modifyShipment(id, body);
//         // console.log('response data', response);
//         // let  shipments = []
//         // shipments.push(response);
//         // console.log(shipments);
//         // const driverResponse = await Driver.findOneAndUpdate(driver_id, shipments)
//         // console.log('driverResponse', driverResponse);
//         res.status(200).json({
//             status: "Success",
//             data: response
//         });

//     } catch (err) {
//         res.status(500).json({
//             status: "Success",
//             error: err
//         });
//         console.log(err)
//     }
// }