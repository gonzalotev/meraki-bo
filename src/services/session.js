import axios from 'axios';

const loginService = {
  login: (credential) => axios.post('/public-api/auth/login', credential),
  recoveryPassword: (email, answers) => axios.post('/public-api/auth/recoveryPassword', { email, answers }),
  // eslint-disable-next-line max-len
  resetPassword: ({ password, token }) => axios.post('/public-api/auth/resetPassword', { password, token }),
  getSessionUser: () => axios.post('/api/session'),
};

export default loginService;
