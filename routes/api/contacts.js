const express = require("express");

const controller = require("../../controllers/contacts");

const {validateRequestBody}   = require("../../middlewares/validateRequestBody");

const  schemas  = require("../../schemas/contacts");



const router = express.Router();

router.get("/", controller.getAllItems);

router.get("/:id", controller.getById);

router.post("/", validateRequestBody(schemas.addSchema), controller.add);

router.delete("/:id", controller.deleteById);

router.put("/:id", validateRequestBody(schemas.addSchema), controller.updateById);

module.exports = router;
