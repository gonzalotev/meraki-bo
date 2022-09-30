import axios from 'axios';

const DutyService = {
  fetchDuties: () => axios.get('/public-api/duty'),
  findDuty: (idDuty) => axios.get(`/public-api/duty/${idDuty}`),
  saveDuty: (idDuty, values) => {
    if (idDuty) {
      return axios.put(`/public-api/duty/${idDuty}`, { ...values });
    }
    return axios.post('/public-api/duty', { ...values });
  },
};

export default DutyService;
