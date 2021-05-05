var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const ticketRouter = require("./routes/ticketRoute");
const globalErrorHandler = require("./controllers/errorController");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/tickets", ticketRouter);

/* -------------ERROR HANDLERS MIDDLEWARE---------------*/
// If not handle by other router, implement 404 Router
app.all("*", (req, res, next) => {
  /* NOTE Express will assume anything inside next() as an error
	it will skip all middlewares in middleware statck, and Handling with
	global error handler */
  if (!res.headersSent) {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  }

  // Additional middleware can put here
  res.end();
});

// Error Middleware Handler
app.use(globalErrorHandler);
/* -----------------------------------------------------*/
module.exports = app;
