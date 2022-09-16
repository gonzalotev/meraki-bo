import TextInput from '../TextInput';
import getFieldError from './getFieldError';

const TextField = ({ field, form, ...props }) => (
  <TextInput
    {...props}
    {...field}
    errorMessage={getFieldError(form, field)}
  />
);

export default TextField;
