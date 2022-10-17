import { object, string } from 'yup';
import { messages } from 'constant';

const timetableSchema = object().shape({
  schedule: string()
    .required(messages.FIELD_REQUIRED),
  day: string()
    .required(messages.FIELD_REQUIRED),
});

export default timetableSchema;
