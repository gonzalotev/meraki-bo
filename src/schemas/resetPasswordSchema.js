import { object, ref, string } from 'yup';
import { messages } from 'constant';

const resetPasswordSchema = object().shape({
  password: string()
    .required(messages.FIELD_REQUIRED)
    .min(4, messages.SHORT_PASSWORD)
    .max(16, messages.LONG_PASSWORD),
  confirmPassword: string()
    .required(messages.FIELD_REQUIRED)
    .oneOf([ref('password'), null], messages.PASSWORD_NOT_MATCH),
});

export default resetPasswordSchema;
