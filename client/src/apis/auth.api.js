import axios from 'axios';

export const loginAPI = (domain, email, password) => {
  const response = axios.post('/auth/login', {
    domain,
    email,
    password,
  });

  return response;
};
