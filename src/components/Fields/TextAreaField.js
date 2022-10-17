import TextInput from '../TextInput';
import getFieldError from './getFieldError';

const TextAreaField = ({
  field, form, rows, cols, ...props
}) => (
  <TextInput
    {...props}
    {...field}
    as="textarea"
    rows={rows || 4}
    cols={cols || 50}
    h="initial"
    errorMessage={getFieldError(form, field)}
  />
);

export default TextAreaField;
