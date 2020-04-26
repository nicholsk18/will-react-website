const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    header: {
        type: String,
    },
    subheader: {
        type: String,
    },
});

const Data = mongoose.model("Data", userSchema);
module.exports = Data;
