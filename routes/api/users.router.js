const express = require("express");

const controller = require("../../controllers/user.controllers");

const { validateRequestBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/users");


const router = express.Router();
// signup
router.post("/register", validateRequestBody(schemas.registerSchema), controller.register);
console.log("Register endpoint reached");
// signin
router.post("/login", validateRequestBody(schemas.loginSchema), controller.login);

router.get("/current", authenticate, controller.getCurrent);

router.post("/logout", authenticate, controller.logout);

router.patch("/", authenticate, controller.updateUserSubscription);

module.exports = router;