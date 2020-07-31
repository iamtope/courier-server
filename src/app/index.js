const userRoutes = require("./account/User/routes");
const driverRoutes = require("./driver/routes")
const shipmentRoutes = require("./shipment/routes")

module.exports = app => {
    app.use("/v1/user", userRoutes);
    app.use("/v1/driver", driverRoutes);
    app.use("/v1/shipment", shipmentRoutes)

}