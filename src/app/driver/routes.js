const driverController = require("./controller");
const router = require("express").Router();

router.post("/", driverController.addDriver);
router.get("/", driverController.getAllDrivers);
router.put("/:id", driverController.updateDriver);
router.get("/:id", driverController.getDriverById);


module.exports = router;