const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.length < 7) {
                throw new Error("Length must be greater than 6");
            }
            if (value.toLowerCase().includes("password")) {
                throw new Error('Password cannot contain "password');
            }
        },
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

userSchema.methods.toJSON = function () {
    const userObject = this.toObject();

    // remove from response
    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign(
        { _id: this._id.toString() },
        process.env.JWT_SECRET
    );

    this.tokens = this.tokens.concat({ token });
    await this.save();

    return token;
};

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Unable to login");
    }

    return user;
};

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }

    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
