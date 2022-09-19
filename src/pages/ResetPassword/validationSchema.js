import { object, string } from 'yup';

const validationSchema = object().shape({
  password: string().required('required'),
});

export default validationSchema;
