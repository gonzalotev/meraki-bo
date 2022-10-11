import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useTheme,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

const SelectInput = ({
  name,
  value,
  onChange,
  label = '',
  errorMessage,
  options = [],
  getOptionValue = option => option.value,
  ...props
}) => {
  const { breakpoints } = useTheme();
  const selectedValue = options.find(option => getOptionValue(option) === value);
  return (
    <FormControl
      p={4}
      minWidth={breakpoints.sm}
      maxWidth={breakpoints.md}
      isInvalid={!!errorMessage}
      isRequired={props.isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <Select
        id={name}
        instanceId={name}
        value={selectedValue}
        onChange={option => onChange(getOptionValue(option))}
        options={options}
        isClearable
        chakraStyles={{
          control: (provider) => ({ ...provider, backgroundColor: 'white' }),
        }}
        {...props}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectInput;
