const userController = require("./controller");
const router = require("express").Router();

router.post("/register", userController.createNewUser);
router.get("/confirmation/:token", userController.confirmEmail);
router.post("/resend-email-verification", userController.resendEmail);
router.post("/login", userController.logUserIn)
router.post("/forgot-password", userController.forgotpassword)
router.post("/reset-password/:token", userController.resetPassword)
router.post("/change-password", userController.changePassword)
router.get("/users", userController.getAllUsers)
module.exports = router;