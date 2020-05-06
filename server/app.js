const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const form = require("./routers/form");
const pageDataRouter = require("./routers/pageData");

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(form);
app.use(pageDataRouter);

module.exports = app;
