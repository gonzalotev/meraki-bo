import { object, string } from 'yup';

const validationSchema = object().shape({
  title: string().required('required'),
  price: string().required('required'),
});

export default validationSchema;
