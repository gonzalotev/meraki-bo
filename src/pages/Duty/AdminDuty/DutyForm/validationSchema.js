import { object, string } from 'yup';

const validationSchema = object().shape({
  name: string().required('required'),
});

export default validationSchema;
