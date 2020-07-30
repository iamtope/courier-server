const Driver = require("./model");

exports.getAllDrivers = async (req, res) => {
    try {
        const response = await Driver.find({});
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        console.log(err)
    }
}



exports.getDriverById = async (req, res) => {
    try {
        let id = req.params.id
        const response = await Driver.findById(id);
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        console.log(err)
    }
}


exports.addDriver = async (req, res) => {
    try {
        let driver = new Driver({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
        })
        driver.shipments = [];
        let response = await driver.save();
        res.status(200).json({
            status: "Success",
            data: response
        });

    } catch (err) {
        console.log(err)
    }
}

exports.updateDriver = async (req, res) => {
    try {
        let id = req.params.id
        await Driver.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json({
            status: "Success",
            msg: "Profile Updated"
        });

    } catch (err) {
        console.log(err)
    }
}