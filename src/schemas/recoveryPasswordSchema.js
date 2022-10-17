import { object, string, array } from 'yup';
import { messages } from 'constant';

const recoveryPasswordSchema = object().shape({
  email: string()
    .email(messages.INVALID_EMAIL)
    .required(messages.FIELD_REQUIRED),
  answers: array()
    .of(
      string()
        .nullable()
        .required(messages.FIELD_REQUIRED),
    ),
});

export default recoveryPasswordSchema;
