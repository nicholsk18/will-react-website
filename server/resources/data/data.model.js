const mongoose = require("mongoose");

const pageData = new mongoose.Schema({
    homeBanner: [
        {
            h1: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
    tournamentsBanner: [
        {
            h1: {
                type: String,
                trim: true,
                required: true,
            },
            span: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
    tournamentsUpcommingEvents: [
        {
            date: Date,
            place: {
                type: String,
                trim: true,
                required: true,
            },
        },
    ],
    aboutBanner: [
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
    aboutLineOne: [{}],
    aboutLineTwo: [{}],
    aboutLineThree: [{}],
    aboutLineFour: [{}],
    teamPage: [
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
