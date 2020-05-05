const mongoose = require("mongoose");

const tournamentsSchema = new mongoose.Schema({});

const tournamentData = mongoose.model("Tournament-Data", tournamentsSchema);

module.exports = tournamentData;
