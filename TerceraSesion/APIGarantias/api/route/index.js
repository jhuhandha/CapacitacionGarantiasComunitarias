const express = require('express');

var app = express();

app.use("/api", require("./ejemplo"));

module.exports = app;