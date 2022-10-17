import { object, string } from 'yup';
import { messages } from 'constant';

const protocolSchema = object().shape({
  content: string()
    .required(messages.FIELD_REQUIRED)
    .max(3000, messages.MAX_3_THOUSAND_CHARACTERS),
  title: string()
    .required(messages.FIELD_REQUIRED)
    .max(100, messages.MAX_ONE_HUNDRED_CHARACTERS),
  signature: string()
    .required(messages.FIELD_REQUIRED)
    .max(500, messages.MAX_FIVE_HUNDRED_CHARACTERS),
});

export default protocolSchema;
