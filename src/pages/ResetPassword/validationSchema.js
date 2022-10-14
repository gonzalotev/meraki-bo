import { object, ref, string } from 'yup';

const validationSchema = object().shape({
  password: string().required('Requerido')
    .min(8, 'La contraseña es muy corta')
    .max(16, 'La contraseña no puede tener mas de 16 caracteres'),
  confirmPassword: string()
    .required('Requerido')
    .oneOf([ref('password'), null], 'Las contraseñas deben coincidir').required('required'),
});

export default validationSchema;
