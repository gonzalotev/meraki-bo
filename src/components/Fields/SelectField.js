import getFieldError from './getFieldError';
import SelectInput from '../SelectInput';

const SelectField = ({ form, field, ...props }) => (
  <SelectInput
    {...props}
    {...field}
    errorMessage={getFieldError(form, field)}
    onChange={value => form.setFieldValue(field.name, value)}
  />
);

export default SelectField;
