import getFieldError from './getFieldError';
import CheckboxListInput from '../CheckboxListInput';

const CheckboxListField = ({ field, form, ...props }) => {
  const handleChange = newValue => {
    const value = form.values[field.name];
    form.setFieldValue(field.name, value.includes(newValue) ? value.filter(x => x !== newValue) : [...value, newValue]);
  };
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
