import Http from './http';

class DisciplineService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  saveStaticData = ({ ...values }) => this.http.post('discipline', { ...values });
}

export default DisciplineService;
