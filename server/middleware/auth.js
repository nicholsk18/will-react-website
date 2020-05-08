const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        // console.log(req.header("SESSION"));

        // const token = req.header("Authorization").replace("Bearer", "");
        const token = req.header("Cookie").replace("SESSION=", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.redirect("/admin");
        // res.status(401).send();
        // res.status(401).send({ error: "Please Authenticate." });
    }
};

module.exports = auth;
