import storage from 'services/storage';
import axios from 'axios';

export const http = () => {
  const token = storage.getToken();
  return axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
    timeout: 50000,
    headers: {
      'Content-Type': 'application/pdf',
      Authorization: `Bearer ${token}`,
    },
    responseType: 'blob',
  });
};

const Service = {
  downloadExcel: ({ endpoint }) => http().get(`${endpoint}/download`)
    .catch(async error => {
      const errorMessage = await error.response.data.text();
      throw await JSON.parse(errorMessage);
    }),
};

export default Service;
