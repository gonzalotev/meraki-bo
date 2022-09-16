import NumberInput from '../NumberInput';
import getFieldError from './getFieldError';

const NumberField = ({
  field,
  form,
  ...props
}) => (
  <NumberInput
    {...props}
    {...field}
    errorMessage={getFieldError(form, field)}
    onChange={newValue => form.setFieldValue(field.name, newValue)}
  />
);

export default NumberField;
