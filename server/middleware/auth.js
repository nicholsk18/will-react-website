const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        // need way to keep user logged in
        // check for xss and other
        const { auth } = req.cookies;
        console.log(auth);

        // const token = req.header("Authorization").replace("Bearer", "");
        // const token = req.header("Cookie").replace("auth=", "");
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": auth,
        });

        if (!user) {
            throw new Error();
        }
        console.log(user);
        req.token = auth;
        req.user = user;
        next();
    } catch (e) {
        res.redirect("/admin");
    }
};

module.exports = auth;
