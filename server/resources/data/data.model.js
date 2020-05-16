const mongoose = require("mongoose");

const pageData = new mongoose.Schema({
    banner: [
        {
            h1: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
});

module.exports = pageData;
