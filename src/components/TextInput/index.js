import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  useTheme,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

const TextInput = ({
  label = '',
  errorMessage,
  iconLeft,
  iconRight,
  ...props
}) => {
  const { breakpoints } = useTheme();
  return (
    <FormControl
      p={4}
      minWidth={breakpoints.sm}
      maxWidth={breakpoints.md}
      width={breakpoints.md}
      isInvalid={!!errorMessage}
      autoComplete="off"
    >
      <FormLabel m={0}>{label}</FormLabel>
      <InputGroup>
        {iconLeft && <InputLeftElement h="100%">{iconLeft}</InputLeftElement>}
        <Input {...props} bg="white" />
        {iconRight && (
          <InputRightElement h="100%">{iconRight}</InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
