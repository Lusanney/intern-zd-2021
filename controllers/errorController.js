/**
 * This method send an error response to the client
 *
 * @param {*} err Instance of AppError
 * @param {*} res Instance of Response of ExpressJS
 */
const sendError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

/**
 * Main method that handles the Error and send back to client end.
 */
module.exports = (error, req, res, next) => {
  // If is not defined, take a default value
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  console.log(error);
  sendError(error, res);
};
