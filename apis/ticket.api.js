const axios = require("axios");

const email = "lusanney@gmail.com";
const password = "Quangvan2701";
const URL = "https://lusanney.zendesk.com/api/v2/tickets";

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
