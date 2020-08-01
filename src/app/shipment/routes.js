const shipmentController = require("./controller");
const router = require("express").Router();

router.post("/", shipmentController.createShipment);
router.get("/", shipmentController.getAllShipments);
router.put("/:id", shipmentController.updateShipment);
router.get("/:id", shipmentController.getShipmentById);


module.exports = router;