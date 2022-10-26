import axios from 'axios';

const EnrollmentService = {
  fetchEnrollment: () => axios.get('/public-api/enrollment'),
  saveEnrollment: ({ id, ...values }) => axios.put(`/api/enrollment/${id}`, { ...values }),
};

export default EnrollmentService;
