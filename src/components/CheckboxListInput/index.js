import {
  FormControl, FormErrorMessage, Stack, CheckboxGroup, Checkbox,
} from '@chakra-ui/react';

const CheckboxListInput = ({ options, errorMessage, ...props }) => (
  <FormControl p={4} isInvalid={!!errorMessage}>
    <CheckboxGroup colorScheme="pink" {...props} mb={3}>
      <Stack direction="column">
        {options.map(option => (<Checkbox key={option.value} value={option.value}>{option.label}</Checkbox>))}
      </Stack>
    </CheckboxGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
);

export default CheckboxListInput;