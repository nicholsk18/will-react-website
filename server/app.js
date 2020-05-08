const express = require("express");
const cookieParser = require("cookie-parser");

require("./db/mongoose");
const userRouter = require("./routers/user");
const form = require("./routers/form");
const pageDataRouter = require("./routers/pageData");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use(form);
app.use(pageDataRouter);

module.exports = app;
