export const TOKEN_KEY = 'id_token';

const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = token => localStorage.setItem(TOKEN_KEY, token);
const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export default {
  getToken,
  setToken,
  removeToken,
};
