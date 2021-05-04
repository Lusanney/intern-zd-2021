var express = require("express");
var router = express.Router();

const {
  getAllTicket,
  getTicketById,
} = require("../controllers/ticketController");

router.route("/").get(getAllTicket);
router.route("/:id").get(getTicketById);

module.exports = router;
