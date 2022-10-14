import {
  object, string,
} from 'yup';

const validationSchema = object().shape({
  email: string().email().required('Requerido'),
  password: string().required('Requerido')
    .min(8, 'La contraseña es muy corta')
    .max(16, 'La contraseña no puede tener mas de 16 caracteres'),
});

export default validationSchema;
