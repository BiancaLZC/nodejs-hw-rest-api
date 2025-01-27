const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        next(httpError(400, "invalid id"));
    }
    next();
};

module.exports = { isValidId };