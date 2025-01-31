const { Contact } = require("../models/contacts.js");

const { httpError, ctrlWrapper } = require("../helpers");


const getAllItems = async (req, res) => {
  const allContacts = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(allContacts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const oneContact = await Contact.findById(id);
  if (!oneContact) {
    throw httpError(404, "Not found");
  }
  res.status(200).json(oneContact);
};

const add = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw httpError(404, "Not found");
  }
  res.status(200).json({ massage: "contact deleted" });
};


const updateById = async (req, res) => {
  const { id } = req.params;
  const editedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!editedContact) {
    throw httpError(404, "Not found");
  }
  res.status(201).json(editedContact);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const editedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!editedContact) {
    throw httpError(404, "Not found");
  }
  res.status(200).json(editedContact);
};


module.exports = {
  getAllItems: ctrlWrapper(getAllItems),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};