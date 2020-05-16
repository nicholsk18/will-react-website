const express = require("express");
const session = require("../middleware/session");

const router = new express.Router();

router.get("/panal", session, (req, res, next) => {
    next();
});

router.get("/admin-home", session, (req, res, next) => {
    next();
});

router.get("/admin-tournaments", session, (req, res, next) => {
    next();
});

router.get("/admin-about", session, (req, res, next) => {
    next();
});

router.get("/admin-team", session, (req, res, next) => {
    next();
});

router.get("/admin-contact", session, (req, res, next) => {
    next();
});

module.exports = router;
