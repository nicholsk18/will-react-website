const express = require("express");
const mongo = require("../db/mongoose");
const Data = require("../models/api");
const router = new express.Router();

router.get("/api/home", async (req, res) => {
    try {
        const data = await Data.findById("5ea5a4e303ce911f1d3596fb");
        console.log(data);
        res.send(data.header);
    } catch (e) {
        res.status(404).send();
    }
});

module.exports = router;
