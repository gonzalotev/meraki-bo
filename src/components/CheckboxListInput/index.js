import {
  FormControl, FormErrorMessage, Stack, CheckboxGroup, Checkbox, FormLabel, Text,
} from '@chakra-ui/react';

const CheckboxListInput = ({
  options, errorMessage, onChange, label, caption, ...props
}) => (
  <FormControl
    p={4}
    isInvalid={!!errorMessage}
    isRequired={props.isRequired}
  >
    <FormLabel>{label}</FormLabel>
    {caption && <Text fontSize="sm" mb={2}>{caption}</Text>}
    <CheckboxGroup colorScheme="pink" {...props} mb={3}>
      <Stack direction="column">
        {options.map(option => (
          <Checkbox
            key={option.id}
            value={option.value}
            onChange={() => onChange(option.id)}
          >
            {option.name}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
);

export default CheckboxListInput;
