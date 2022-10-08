import axios from 'axios';

const HomeService = {
  fetchHome: () => axios.get('/public-api/home'),
  findHome: (id) => axios.get(`/api/home/${id}`),
  saveHome: ({ idHome, ...values }) => {
    if (idHome) {
      return axios.put(`/api/home/${idHome}`, { ...values });
    }
    return axios.post('/api/home', { ...values });
  },
  removeHome: (id) => axios.delete(`/api/home/${id}`),
};

export default HomeService;
