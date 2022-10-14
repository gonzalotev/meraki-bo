import { PasswordField } from 'components';
import { Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { styles } from 'constant';

const ResetPasswordForm = ({ isSubmitting }) => (
  <Form style={styles.form}>
    <Field
      component={PasswordField}
      name="password"
      label="Nueva Contraseña"
    />
    <Field
      component={PasswordField}
      name="confirmPassword"
      label="Confirmar Contraseña"
    />
    <HStack pb={2} justifyContent="center">
      <Button
        type="submit"
        disabled={!!isSubmitting}
        bg="pink.300"
      >
        Guardar
      </Button>
    </HStack>
  </Form>
);

export default ResetPasswordForm;
