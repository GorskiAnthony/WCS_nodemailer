const express = require("express");
const app = express();
require("dotenv").config();

const indexRouter = require("./routes/index");

app.use("/api", indexRouter);

module.exports = app;
