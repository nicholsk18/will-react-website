const express = require("express");
const session = require("../middleware/session");

const router = new express.Router();

router.get("/admin/panal", session, (req, res, next) => {
    next();
});

router.get("/admin/admin-home", session, (req, res, next) => {
    next();
});

router.get("/admin/admin-tournaments", session, (req, res, next) => {
    next();
});

router.get("/admin/admin-about", session, (req, res, next) => {
    next();
});

router.get("/admin/admin-team", session, (req, res, next) => {
    next();
});

router.get("/admin/admin-contact", session, (req, res, next) => {
    next();
});

module.exports = router;
