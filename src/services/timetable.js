import axios from 'axios';

const TimetableService = {
  fetchTimetable: () => axios.get('/api/timetable'),
};

export default TimetableService;
