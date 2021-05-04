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
