import Http from './http';

class SessionService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  login = (credential) => this.http.post('public/auth/login', credential);

  register = (values) => this.http.post('public/auth/register', values);

  recoveryPassword = (email, answers) => this.http.post('public/auth/recoveryPassword', { email, answers });

  resetPassword = ({ password, token }) => this.http.post('public/auth/resetPassword', { password, token });

  getSessionUser = () => this.http.post('session');
}

export default SessionService;
