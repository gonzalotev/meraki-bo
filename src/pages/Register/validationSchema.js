import { object, string } from 'yup';

const validationSchema = object().shape({
  email: string().email().required('required'),
  password: string().required('required')
    .min(4, 'little')
    .max(10, 'large'),
  role: string().required('required'),
});

export default validationSchema;
