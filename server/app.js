var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// Load all configs
require("./config");

// Routes
const ticketRouter = require("./routes/ticketRoute");
const globalErrorHandler = require("./controllers/errorController");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/v1/tickets", ticketRouter);

/* -------------ERROR HANDLERS MIDDLEWARE---------------*/
// If not handle by other router, implement 404 Router
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Error Middleware Handler
app.use(globalErrorHandler);
/* -----------------------------------------------------*/
module.exports = app;
