import { object, string } from 'yup';
import { messages } from 'constant';

const disciplineSchema = object().shape({
  name: string()
    .required(messages.FIELD_REQUIRED),
});

export default disciplineSchema;
