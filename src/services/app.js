import Http from './http';

class AppService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  downloadExcel = ({ endpoint }) => this.http.getFile(`${endpoint}/download`);
}

export default AppService;
