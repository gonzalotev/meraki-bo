import { TextField } from 'components';
import { Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  height: '100%',
};

const ResetPasswordForm = ({ isSubmitting }) => (
  <Form style={style}>
    <Field
      component={TextField}
      name="password"
      label="Nueva Contraseña"
    />
    <HStack pb={2}>
      <Button
        disabled={!!isSubmitting}
        bg="pink.600"
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        disabled={!!isSubmitting}
        bg="pink.300"
      >
        Enviar
      </Button>
    </HStack>
  </Form>
);

export default ResetPasswordForm;
