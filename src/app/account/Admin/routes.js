const adminController = require("./controller");
const router = require("express").Router();

router.post("/register", adminController.createAdmin);
router.post("/login", adminController.loginAdmin)
router.post("/change-password", adminController.changePassword)
router.get("/admin/:page", adminController.getAllAdmin)
module.exports = router;