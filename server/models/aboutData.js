const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({});

const AboutData = mongoose.model("About-Data", aboutSchema);

module.exports = AboutData;
