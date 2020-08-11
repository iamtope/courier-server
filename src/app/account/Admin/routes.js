const adminController = require("./controller");
const router = require("express").Router();

router.post("/register-admin", adminController.createAdmin);
router.get("/confirmation/:token", adminController.confirmEmail);
router.post("/resend-email-verification", adminController.resendEmail);
router.post("/login", adminController.logUserIn)
router.post("/forgot-password", adminController.forgotpassword)
router.post("/reset-password/:token", adminController.resetPassword)
router.post("/change-password", adminController.changePassword)
router.get("/admin/:page", adminController.getAllAdmin)
module.exports = router;