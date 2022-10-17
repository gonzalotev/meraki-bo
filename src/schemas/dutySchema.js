import { object, string } from 'yup';
import { messages } from 'constant';

const dutySchema = object().shape({
  title: string()
    .required(messages.FIELD_REQUIRED),
  price: string()
    .required(messages.FIELD_REQUIRED),
});

export default dutySchema;
