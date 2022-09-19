import axios from 'axios';

const DutyService = {
  fetchDuties: () => axios.get('/public-api/duty'),
};

export default DutyService;
