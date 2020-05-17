const mongoose = require("mongoose");

const pageData = new mongoose.Schema({
    pageName: {
        type=String,
        trim: true,
        required: true
    },
    pageContent: [{
        items: {
            type: String,
            trim: true,
            required: true
        }
    }]
});

module.exports = pageData;
