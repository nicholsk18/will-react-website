const express = require("express");
const auth = require("../middleware/auth");

const router = new express.Router();

router.get("/admin/panal", auth, (req, res, next) => {
    next();
});

router.get("/admin/admin-home", auth, (req, res, next) => {
    next();
});

router.get("/admin/admin-tournaments", auth, (req, res, next) => {
    next();
});

router.get("/admin/admin-about", auth, (req, res, next) => {
    next();
});

router.get("/admin/admin-team", auth, (req, res, next) => {
    next();
});

router.get("/admin/admin-contact", auth, (req, res, next) => {
    next();
});

module.exports = router;
