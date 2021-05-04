import { useEffect, useState } from 'react';
import { loginAPI } from '../../apis/auth.api';

const useGetUser = (domain, email, password) => {
  const [getUser, setUser] = useState(null);

  useEffect(() => {
    loginAPI(domain, email, password)
      .then((response) => {
        const { data } = response;
        if (data) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [domain, email, password]);

  return getUser;
};

export default useGetUser;
