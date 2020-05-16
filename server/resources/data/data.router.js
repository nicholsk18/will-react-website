const { Router } = require("express");
const { getData } = require("./data.controller");

const router = Router();

// router.route("/api/").get();
// /api/
router.get("/data", getData);

module.exports = router;
