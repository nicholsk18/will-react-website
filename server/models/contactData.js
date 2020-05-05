const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({});

const ContactData = mongoose.model("Contact-Data", contactSchema);

module.exports = ContactData;
