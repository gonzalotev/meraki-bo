import { Button, HStack } from '@chakra-ui/react';
import SubmitButton from 'components/SubmitButton';

const FormButtons = ({
  onCancel, isDisabled, isLoading, cancelText = 'Cancelar', ...props
}) => (
  <HStack pb={2} justifyContent="center" my={5}>
    {!!onCancel && (
      <Button onClick={onCancel}>
        {cancelText}
      </Button>
    )}
    <SubmitButton
      isDisabled={isDisabled}
      isLoading={isLoading}
      {...props}
    />
  </HStack>
);

export default FormButtons;
