import axios from 'axios';

const DutyService = {
  fetchDuties: () => axios.get('/public-api/duty'),
  findDuty: (id) => axios.get(`/api/duty/${id}`),
  saveDuty: ({ idDuty, ...values }) => {
    if (idDuty) {
      return axios.put(`/api/duty/${idDuty}`, { ...values });
    }
    return axios.post('/api/duty', { ...values });
  },
  remove: (id) => axios.delete(`/api/duty/${id}`),
};

export default DutyService;
