import { Button } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';

const SubmitButton = ({ submitText, hiddenIcon, ...props }) => (
  <Button
    type="submit"
    bg="pink.300"
    leftIcon={!hiddenIcon ? <PlusSquareIcon /> : undefined}
    my={5}
    {...props}
  >
    {submitText}
  </Button>
);

export default SubmitButton;
