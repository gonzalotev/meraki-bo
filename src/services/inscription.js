import axios from 'axios';

const InscriptionService = {
  fetchInscription: () => axios.get('/api/inscription'),
  saveInscription: ({ ...values }) => axios.post('/public-api/inscription', { ...values }),
  removeInscription: (id) => axios.delete(`/api/inscription/${id}`),
};

export default InscriptionService;
