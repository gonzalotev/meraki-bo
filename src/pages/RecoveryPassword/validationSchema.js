import { object, string, array } from 'yup';

const validationSchema = object().shape({
  email: string().email().required('Requerido'),
  answers: array().of(
    string().nullable().required('Requerido'),
  ),
});

export default validationSchema;
