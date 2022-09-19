import {
  FormControl, FormErrorMessage, Radio, RadioGroup, Stack,
} from '@chakra-ui/react';

const RadioListInput = ({ options, errorMessage, ...props }) => (
  <FormControl p={4} isInvalid={!!errorMessage}>
    <RadioGroup colorScheme="pink" {...props} mb={3}>
      <Stack direction="column">
        {options.map(option => (<Radio key={option.value} value={option.value}>{option.label}</Radio>))}
      </Stack>
    </RadioGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
);

export default RadioListInput;
