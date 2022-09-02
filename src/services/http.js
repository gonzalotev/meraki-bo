import axios from 'axios';
import storage from './storage';

const getAuthHeader = token => `Bearer ${token}`;

export const setupApi = () => {
  axios.interceptors.response.use(response => response, async error => {
    const { response } = error;
    if (!response) {
      return Promise.reject(error);
    }
    if (response.config.url === 'public-api/login') {
      storage.removeToken();
      return Promise.reject(error);
    }
    if (response.status === 401) {
      storage.removeToken();
      window.location = '/';
    }
    return Promise.reject(error);
  });
  axios.interceptors.request.use(request => {
    const token = storage.getToken();
    request.headers.Authorization = getAuthHeader(token);
    return request;
  });
  axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT;
  axios.defaults.timeout = 20000;
};
