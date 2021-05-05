import axios from 'axios';

export const getAllTicketsAPI = async (perPage, page) => {
  const response = await axios.get('/api/v1/tickets', {
    params: {
      perPage,
      page,
    },
  });

  return response;
};

export const getTicketByIdAPI = async (id) => {
  const response = await axios.get(`/api/v1/tickets/${id}`);

  console.log(response);
  return response;
};
