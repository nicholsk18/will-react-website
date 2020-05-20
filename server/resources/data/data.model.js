const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
    pageName: {
        type: String,
        trim: true,
        required: true,
    },
    pageContent: {
        type: Array,
        required: true,
    },
});

const PageData = mongoose.model("PageData", pageSchema);

module.exports = PageData;
