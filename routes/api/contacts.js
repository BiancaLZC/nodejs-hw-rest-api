const express = require("express");

const controller = require("../../controllers/contacts");
const { validateRequestBody } = require("../../middlewares/validateRequestBody");
const { isValidId, isEmptyBody } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", controller.getAllItems);

router.get("/:id", isValidId, controller.getById);

router.post("/", validateRequestBody(schemas.addSchema), controller.add);

router.delete("/:id", isValidId, controller.deleteById);

router.put("/:id", isEmptyBody, isValidId, validateRequestBody(schemas.addSchema), controller.updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateRequestBody(schemas.updateFavoriteSchema),
  controller.updateStatusContact
);

module.exports = router;
