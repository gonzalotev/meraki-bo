import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useTheme,
  NumberInput as Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInputField,
} from '@chakra-ui/react';

const NumberInput = ({
  name,
  value,
  onChange,
  label = '',
  errorMessage,
  iconLeft,
  iconRight,
  placeholder,
  ...props
}) => {
  const { breakpoints } = useTheme();
  return (
    <FormControl
      p={4}
      minWidth={breakpoints.sm}
      maxWidth={breakpoints.md}
      isInvalid={!!errorMessage}
      isRequired={props.isRequired}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        {iconLeft && <InputLeftElement h="100%">{iconLeft}</InputLeftElement>}
        <Input
          name={name}
          value={value}
          onChange={onChange}
          width="100%"
          {...props}
        >
          <NumberInputField placeholder={placeholder} />
        </Input>
        {iconRight && (
          <InputRightElement h="100%">{iconRight}</InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default NumberInput;
