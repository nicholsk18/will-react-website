const { Router } = require("express");
const { getData, getStats } = require("./data.controller");

const router = Router();

// router.route("/api/").get();
// /api/
router.get("/data", getData);

router.get("/stats", getStats);

module.exports = router;
