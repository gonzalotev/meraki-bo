import axios from 'axios';

const loginService = {
  login: (credential) => axios.post('/public-api/auth/login', credential),
  register: (values) => axios.post('/public-api/auth/register', values),
  recoveryPassword: (email, answers) => axios.post('/public-api/auth/recoveryPassword', { email, answers }),
  resetPassword: ({ password, token }) => axios.post('/public-api/auth/resetPassword', { password, token }),
  getSessionUser: () => axios.post('/api/session'),
};

export default loginService;
