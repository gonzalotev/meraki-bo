import Http from './http';

class InscriptionService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchInscription = () => this.http.get('inscription');

  saveInscription = ({ ...values }) => this.http.post('public/inscription', { ...values });

  removeInscription = (id) => this.http.delete(`inscription/${id}`);
}

export default InscriptionService;
