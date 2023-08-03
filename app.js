var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

const hijaiyahRouter = require("./app/api/hijaiyah/router");

var app = express();

app.use(cors())

app.use(express.static("public"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", hijaiyahRouter);

module.exports = app;
