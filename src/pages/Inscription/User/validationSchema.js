import {
  array, date, object, string, number,
} from 'yup';

const validationSchema = object().shape({
  address: string().required('Requerido'),
  disciplines: array()
    .of(string())
    .min(1, 'Al menos uno').required('Requerido'),
  documentId: number()
    .min(1000000, 'Documento inválido')
    .max(99999999, 'Documento inválido')
    .required('Requerido'),
  email: string().email('Email inválido').required('Requerido'),
  name: string().required('Requerido'),
  allowGoAlone: string().required('Requerido'),
  birthdate: date().required('Requerido'),
});

export default validationSchema;
