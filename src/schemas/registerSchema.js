import { object, string } from 'yup';
import { messages } from 'constant';

const registerSchema = object().shape({
  email: string()
    .email(messages.INVALID_EMAIL)
    .required(messages.FIELD_REQUIRED),
  password: string()
    .required(messages.FIELD_REQUIRED)
    .min(4, messages.SHORT_PASSWORD)
    .max(16, messages.LONG_PASSWORD),
  role: string()
    .required(messages.FIELD_REQUIRED),
});

export default registerSchema;
