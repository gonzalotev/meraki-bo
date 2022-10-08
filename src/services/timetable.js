import axios from 'axios';

const TimetableService = {
  fetchTimetable: () => axios.get('/api/timetable'),
  findTimetable: (id) => axios.get(`/api/timetable/${id}`),
  saveTimetable: ({ idTimetable, ...values }) => {
    if (idTimetable) {
      return axios.put(`/api/timetable/${idTimetable}`, { ...values });
    }
    return axios.post('/api/timetable', { ...values });
  },
  removeTimetable: (id) => axios.delete(`/api/timetable/${id}`),
};

export default TimetableService;
