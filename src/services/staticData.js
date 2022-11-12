import Http from './http';

class StaticDataService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchStaticData = () => this.http.get('public/staticData');
}

export default StaticDataService;
