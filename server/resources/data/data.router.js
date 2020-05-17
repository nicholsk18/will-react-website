const { Router } = require("express");
const {
    getData,
    createData,
    updateData,
    getStats,
    updateStats,
} = require("./data.controller");

const router = Router();

// /api/
router.route("/data").get(getData).post(createData).put(updateData);

router.route("/stats").get(getStats).put(updateStats);

module.exports = router;
