const express = require("express");
const cookieParser = require("cookie-parser");

require("./db/mongoose");
const userRouter = require("./routers/user");
const form = require("./routers/form");
const pageDataRouter = require("./routers/pageData");
const protected = require("./routers/protected");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use(form);
app.use(pageDataRouter);
app.use(protected);

module.exports = app;
