import getFieldError from './getFieldError';
import CheckboxListInput from '../CheckboxListInput';

const CheckboxListField = ({ field, form, ...props }) => {
  const handleChange = value => form.setFieldValue(field.name, value);
  return (
    <CheckboxListInput
      {...props}
      {...field}
      onChange={handleChange}
      errorMessage={getFieldError(form, field)}
    />
  );
};

export default CheckboxListField;
