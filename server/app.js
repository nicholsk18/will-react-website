const express = require("express");
const cookieParser = require("cookie-parser");

require("./db/mongoose");

const adminRouter = require("./resources/admin/admin.router");
const userApiRouter = require("./resources/user/user.router");
const dataApiRouter = require("./resources/data/data.router");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/admin", adminRouter);
app.use("/api/admin", userApiRouter);
app.use("/api", dataApiRouter);

module.exports = app;
