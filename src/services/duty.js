import axios from 'axios';

const DutyService = {
  fetchDuty: () => axios.get('/api/duty'),
};

export default DutyService;
