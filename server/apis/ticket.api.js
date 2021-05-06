const axios = require("axios");
const {ZENDESK_URL, ZENDESK_EMAIL, ZENDESK_PASSWORD} = require('../config');

const email = ZENDESK_EMAIL;
const password = ZENDESK_PASSWORD;
const URL = `${ZENDESK_URL}/api/v2/tickets`;

exports.getAllTicketsAPI = async (perPage = 25, page = 1) => {
  const response = await axios.get(URL, {
    params: {
      per_page: perPage,
      page,
    },
    auth: {
      username: email,
      password,
    },
  });

  return response;
};

exports.getTicketByIdAPI = async (id) => {
  const response = await axios.get(`${URL}/${id}`, {
    auth: {
      username: email,
      password,
    },
  });

  return response;
};
