const User = require("./user.model");

const createUser = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.username,
            req.body.password
        );
        const token = await user.generateAuthToken();
        // res.send("localhost:3000/admin/panal");
        res.status(200)
            .cookie("auth", token, {
                maxAge: 60 * 60 * 1000, // 1 hour
                httpOnly: true,
                secure: true,
                sameSite: true,
            })
            .send({ user, token });
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
};

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
};
