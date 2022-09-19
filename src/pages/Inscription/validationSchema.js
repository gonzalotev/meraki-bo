import { object, string } from 'yup';

const validationSchema = object().shape({
  name: string().required('Requerido'),
});

export default validationSchema;
