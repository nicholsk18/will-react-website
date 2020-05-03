const express = require("express");
const mongo = require("../db/mongoose");
const Data = require("../models/api");
const router = new express.Router();

router.post("/api/admin", async (req, res) => {
    console.log(req.body);
    res.status(200).send();
});

module.exports = router;
