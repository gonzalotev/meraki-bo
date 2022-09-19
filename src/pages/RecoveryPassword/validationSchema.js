import { object, string, array } from 'yup';

const validationSchema = object().shape({
  email: string().email().required('required'),
  answers: array().of(
    string().nullable().required('required'),
  ),
});

export default validationSchema;
