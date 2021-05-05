class AppError extends Error {
  /**
   * This class handle the Error Middleware from ExpressJS with custom
   *  message and statusCode
   * @param {String} message - Message to send to client
   * @param {Number} statusCode - HTTP StatusCode
   */
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
