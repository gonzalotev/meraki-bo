export const TOKEN_KEY = 'id_token';

const StorageService = {
  getToken: () => localStorage.getItem(TOKEN_KEY),

  setToken: token => localStorage.setItem(TOKEN_KEY, token),

  removeToken: () => localStorage.removeItem(TOKEN_KEY),
};

export default StorageService;
