const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({});

const HomeData = mongoose.model("Home-Data", homeSchema);

module.exports = HomeData;
