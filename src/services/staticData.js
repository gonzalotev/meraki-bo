import axios from 'axios';

const Service = {
  fetchStaticData: () => axios.get('/public-api/staticData'),
};

export default Service;
