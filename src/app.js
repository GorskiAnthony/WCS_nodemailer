const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

app.use("/api", indexRouter);

module.exports = app;
