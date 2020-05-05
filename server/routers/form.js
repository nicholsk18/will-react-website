const express = require("express");
const validator = require("validator");

const ContactMsg = require("../utils/email/ContactMsg");
const transport = require("../utils/transport");

const router = new express.Router();

router.post("/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);
    // if (!validator.isEmail(email)) {
    //     return new Error("invalid email");
    // }

    const newMsg = new ContactMsg(name, email, subject, message);

    console.log(newMsg);
    transport.sendMail(newMsg, (err, info) => {
        if (err) {
            console.log(err);
            return new Error(err);
        }

        res.status(200).send(info);
    });
});

module.exports = router;
