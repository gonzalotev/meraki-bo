/**
 * Returns the error to show on the HTML form
 */
import { getIn } from 'formik';

const getFieldError = ({ submitCount, touched, errors }, { name }) => (
  submitCount && !!getIn(touched, name) ? (getIn(errors, name)) : undefined
);

export default getFieldError;
