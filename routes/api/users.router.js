const express = require("express");

const controller = require("../../controllers/user.controllers");

const { validateRequestBody, authenticate, upload} = require("../../middlewares");

const { schemas } = require("../../models/users");


const router = express.Router();
// register
router.post("/register", validateRequestBody(schemas.registerSchema), controller.register);
console.log("Register endpoint reached");
// verify email
router.get("/verify/:verificationToken", controller.verifyEmail);
// resend verify email
router.post("/verify", validateRequestBody(schemas.emailSchema), controller.resendVerifyEmail);
// signin
router.post("/login", validateRequestBody(schemas.loginSchema), controller.login);
// current user
router.get("/current", authenticate, controller.getCurrent);
// logout
router.post("/logout", authenticate, controller.logout);
// update subscription
router.patch("/", authenticate, controller.updateUserSubscription);
// avatar update
router.patch("/avatars", authenticate, upload.single("avatar"), controller.updateAvatar);

module.exports = router;