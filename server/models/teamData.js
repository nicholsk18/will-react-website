const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({});

const TeamData = mongoose.model("Team-Data", teamSchema);

module.exports = TeamData;
