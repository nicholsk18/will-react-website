const { Router } = require("express");
const getNext = require("./admin.controller");
const session = require("../../middleware/session");

const router = Router();

router.get("/panal", session, getNext);

router.get("/admin-home", session, getNext);

router.get("/admin-tournaments", session, getNext);

router.get("/admin-about", session, getNext);

router.get("/admin-team", session, getNext);

router.get("/admin-contact", session, getNext);

module.exports = router;
