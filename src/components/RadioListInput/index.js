import {
  FormControl, FormErrorMessage, FormLabel, Radio, RadioGroup, Stack, Text,
} from '@chakra-ui/react';

const RadioListInput = ({
  options, errorMessage, label, caption, isRequired, ...props
}) => (
  <FormControl
    p={4}
    isInvalid={!!errorMessage}
    isRequired={isRequired}
  >
    <FormLabel>{label}</FormLabel>
    {caption && <Text fontSize="sm" mb={2}>{caption}</Text>}
    <RadioGroup colorScheme="pink" {...props} mb={3}>
      <Stack direction="column">
        {options.map(option => (<Radio key={option.value} value={option.value}>{option.label}</Radio>))}
      </Stack>
    </RadioGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
);

export default RadioListInput;
