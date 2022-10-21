import axios from 'axios';

const Service = {
  fetchStaticData: () => axios.get('/public-api/staticData'),
  saveStaticData: ({ ...values }) => axios.post('/api/staticData', { ...values }),
};

export default Service;
