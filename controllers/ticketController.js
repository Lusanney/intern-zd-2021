const { getAllTicketsAPI, getTicketByIdAPI } = require("../apis/ticket.api");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");

exports.getAllTicket = catchAsync(async (req, res, next) => {
  const response = await getAllTicketsAPI(req.query.perPage, req.query.page);

  res.status(StatusCodes.OK).json(response.data);
});

exports.getTicketById = catchAsync(async (req, res, next) => {
  const response = await getTicketByIdAPI(req.params.id);

  res.status(StatusCodes.OK).json(response.data);
});
