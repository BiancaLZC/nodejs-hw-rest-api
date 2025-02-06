const express = require("express");

const controller = require("../../controllers/contacts.controllers");

const {
  validateRequestBody,
  isValidId,
  isEmptyBody,
  authenticate,
} = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, controller.getAllItems);

router.get("/:id", authenticate, isValidId, controller.getById);

router.post("/", authenticate, validateRequestBody(schemas.addSchema), controller.add);

router.delete("/:id", authenticate, isValidId, controller.deleteById);

router.put(
  "/:id",
  authenticate,
  isEmptyBody,
  isValidId,
  validateRequestBody(schemas.addSchema),
  controller.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateRequestBody(schemas.updateFavoriteSchema),
  controller.updateStatusContact
);

module.exports = router;
