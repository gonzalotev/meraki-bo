import { object, number, string } from 'yup';
import { messages } from 'constant';

const dutySchema = object().shape({
  idDiscipline: number()
    .required(messages.FIELD_REQUIRED),
  price: string()
    .required(messages.FIELD_REQUIRED),
});

export default dutySchema;
