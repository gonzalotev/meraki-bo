import { object, string } from 'yup';

const validationSchema = object().shape({
  schedule: string().required('required'),
  day: string().required('required'),
});

export default validationSchema;
