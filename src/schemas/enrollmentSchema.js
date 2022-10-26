import { object, number, string } from 'yup';
import { messages } from 'constant';

const enrollmentSchema = object().shape({
  name: string()
    .required(messages.FIELD_REQUIRED),
  price: number()
    .required(messages.FIELD_REQUIRED),
});

export default enrollmentSchema;
