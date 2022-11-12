import Http from './http';

class EnrollmentService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchEnrollment = () => this.http.get('public/enrollment');

  saveEnrollment = ({ id, ...values }) => this.http.put(`enrollment/${id}`, { ...values });
}

export default EnrollmentService;
