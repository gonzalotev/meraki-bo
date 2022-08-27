import axios from 'axios';

export const fetchAll = () => {
  const protocols = axios.get(`http://localhost:3306/api/protocol`);
  return protocols;
};
