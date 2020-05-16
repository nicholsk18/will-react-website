const jwt = require("jsonwebtoken");
const User = require("../resources/user/user.model");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            res.redirect("/admin");
        }

        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.redirect("/admin");
    }
};

module.exports = auth;
