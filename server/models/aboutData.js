const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    banner: [
        {
            h1: {
                type: String,
                trim: true,
                required: true,
            },
            p: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
    split1: [
        {
            title: {
                type: String,
                trim: true,
                required: true,
            },
            p: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
});

const AboutData = mongoose.model("About-Data", aboutSchema);

module.exports = AboutData;
