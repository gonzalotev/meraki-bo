import {
  array, date, object, string, number,
} from 'yup';
import { messages } from 'constant';

const inscriptionSchema = object().shape({
  address: string()
    .required(messages.FIELD_REQUIRED),
  disciplines: array()
    .of(string())
    .min(1, messages.AT_LEAST_ONE).required(messages.FIELD_REQUIRED),
  documentId: number()
    .min(1000000, messages.INVALID_DOCUMENT)
    .max(99999999, messages.INVALID_DOCUMENT)
    .required(messages.FIELD_REQUIRED),
  email: string()
    .email(messages.INVALID_EMAIL)
    .required(messages.FIELD_REQUIRED),
  name: string()
    .required(messages.FIELD_REQUIRED),
  allowGoAlone: string()
    .required(messages.FIELD_REQUIRED),
  birthdate: date()
    .required(messages.FIELD_REQUIRED),
});

export default inscriptionSchema;
