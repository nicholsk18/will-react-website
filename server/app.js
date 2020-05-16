const express = require("express");
const cookieParser = require("cookie-parser");

require("./db/mongoose");
const userRouter = require("./resources/user/user.router");
const form = require("./controller/form");
const pageDataRouter = require("./controller/pageData");
const protected = require("./controller/protected");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/admin", userRouter);
app.use(form);
app.use("/api", pageDataRouter);
app.use("/admin", protected);

module.exports = app;
