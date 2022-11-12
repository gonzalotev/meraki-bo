import Http from './http';

class TimetableService {
  constructor(token) {
    this.http = new Http(token, 'api');
  }

  fetchTimetable = () => this.http.get('public/timetable');

  findTimetable = (id) => this.http.get(`timetable/${id}`);

  saveTimetable = ({ idTimetable, ...values }) => {
    if (idTimetable) {
      return this.http.put(`timetable/${idTimetable}`, { ...values });
    }
    return this.http.post('timetable', { ...values });
  };

  removeTimetable = (id) => this.http.delete(`timetable/${id}`);
}

export default TimetableService;
