import axios from 'axios';

const Service = {
  saveStaticData: ({ ...values }) => axios.post('/api/discipline', { ...values }),
};

export default Service;
