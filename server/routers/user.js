const express = require("express");
const User = require("../models/user");

const router = new express.Router();

// needed to create new user
// only need one user
// router.post("/users", async (req, res) => {
//     const user = new User(req.body);

//     try {
//         await user.save();
//         const token = await user.generateAuthToken();
//         res.status(201).send({ user, token });
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

router.post("/api/admin/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.username,
            req.body.password
        );
        const token = await user.generateAuthToken();
        console.log({ user, token });
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
});

module.exports = router;
