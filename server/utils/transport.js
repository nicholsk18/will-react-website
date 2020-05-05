const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
    host: process.env.USER_HOST_NAME,
    port: process.env.USER_PORT,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.USER_PASSWORD,
    },
});

module.exports = transport;
