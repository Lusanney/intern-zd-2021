const { getAllTicketsAPI, getTicketByIdAPI } = require("../apis/ticket.api");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const validateIntField = (field) => {
  if (field) {
    field *= 1;
    if (field < 1 || !Number.isInteger(field)) return false;
  }
  return true;
};

exports.getAllTicket = catchAsync(async (req, res, next) => {
  // Filtering tickets that are negative or float
  const perPage = req.query.perPage;
  const page = req.query.page;

  let isOk = true;
  isOk &= validateIntField(perPage);
  isOk &= validateIntField(page);

  if (!isOk)
    next(
      new AppError(
        "Fields must be integer from 1 onward",
        StatusCodes.BAD_REQUEST
      )
    );

  const response = await getAllTicketsAPI(perPage, page);

  res.status(StatusCodes.OK).json(response.data);
});

exports.getTicketById = catchAsync(async (req, res, next) => {
  const ticketId = req.params.id;

  let isOk = true;
  isOk &= validateIntField(ticketId);

  if (!isOk)
    next(
      new AppError(
        "Fields must be integer from 1 onward",
        StatusCodes.BAD_REQUEST
      )
    );

  try {
    const response = await getTicketByIdAPI(ticketId);
    res.status(StatusCodes.OK).json(response.data);
  } catch (e) {
    next(new AppError(e.response.data.description, e.response.status));
  }
});
