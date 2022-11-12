import { object, string } from 'yup';
import { messages } from 'constant';

const timetableSchema = object().shape({
  discipline: string()
    .required(messages.FIELD_REQUIRED),
  schedule: string()
    .required(messages.FIELD_REQUIRED),
  day: string()
    .required(messages.FIELD_REQUIRED),
});

export default timetableSchema;
