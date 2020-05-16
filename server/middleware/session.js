const jwt = require("jsonwebtoken");
const User = require("../resources/user/user.model");

const session = async (req, res, next) => {
    try {
        const { auth } = req.cookies;

        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": auth,
        });

        if (!user) {
            res.redirect("/admin");
        }

        req.token = auth;
        req.user = user;
        next();
    } catch (e) {
        res.redirect("/admin");
    }
};

module.exports = session;
