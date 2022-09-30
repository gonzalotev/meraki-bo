import {
  array, date, object, string,
} from 'yup';

const validationSchema = object().shape({
  name: string().required('Requerido'),
  yearDate: date().required('Requerido'),
  documentId: string().required('Requerido'),
  address: string().required('Requerido'),
  discipline: array().required('Requerido'),
  retired: string().required('Requerido'),
});

export default validationSchema;
