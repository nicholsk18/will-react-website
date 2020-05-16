const { Router } = require("express");
const auth = require("../../middleware/auth");
const { createUser, loginUser, logoutUser } = require("./user.controller");

const router = Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.post("/logout", auth, logoutUser);

module.exports = router;
