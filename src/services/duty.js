import Http from './http';

class DutyService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchDuties = () => this.http.get('public/duty');

  findDuty = (id) => this.http.get(`duty/${id}`);

  saveDuty = ({ idDuty, ...values }) => {
    if (idDuty) {
      return this.http.put(`duty/${idDuty}`, { ...values });
    }
    return this.http.post('duty', { ...values });
  };

  remove = (id) => this.http.delete(`duty/${id}`);
}

export default DutyService;
