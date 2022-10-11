import { object, string } from 'yup';

const validationSchema = object().shape({
  name: string().required('Requerido'),
  url: string().url('Url inválida').required('Requerido'),
});

export default validationSchema;
