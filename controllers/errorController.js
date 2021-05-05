/**
 * This method send an error response to the client
 *  in development environment. We will give as much
 *  details of error as we can to debug
 *
 * @param {*} err Instance of AppError
 * @param {*} res Instance of Response of ExpressJS
 */
const sendError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

/**
 * Main method that handles the Error and send back to client end.
 *  It will distinguish between whether a production env or development env.
 *  If it is dev env, send the as much as details of error for users & developers
 *  for debugging. Otherwise, if production env, only send appropriate error message.
 *
 *  Please consider to use Error Controllers as provided to prepare for this.
 */
module.exports = (error, req, res, next) => {
  // If is not defined, take a default value
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  console.log(error);
  sendError(error, res);
};
