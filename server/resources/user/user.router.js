const { Router } = require("express");
const auth = require("../../middleware/auth");
const {
    createUser,
    loginUser,
    logoutUser,
    form,
} = require("./user.controller");

const router = Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.post("/logout", auth, logoutUser);

router.post("/contact", form);

module.exports = router;
