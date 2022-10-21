import { object, string } from 'yup';
import { messages } from 'constant';

const loginSchema = object().shape({
  email: string()
    .email(messages.INVALID_EMAIL)
    .required(messages.FIELD_REQUIRED),
  password: string()
    .required(messages.FIELD_REQUIRED),
});

export default loginSchema;
