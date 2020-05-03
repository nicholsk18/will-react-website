const express = require("express");
const validator = require("validator");

const router = new express.Router();

router.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log(name, email, subject, message);
});

module.exports = router;
