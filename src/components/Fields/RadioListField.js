import getFieldError from './getFieldError';
import RadioListInput from '../RadioListInput';

const RadioListField = ({ field, form, ...props }) => {
  const handleChange = value => form.setFieldValue(field.name, value);
  return (
    <RadioListInput
      {...props}
      {...field}
      onChange={handleChange}
      errorMessage={getFieldError(form, field)}
    />
  );
};

export default RadioListField;
