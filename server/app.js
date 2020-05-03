const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/api");
const form = require("./routers/form");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(form);

module.exports = app;
