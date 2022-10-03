import { TextField } from 'components';
import { Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { styles } from 'constant';

const ResetPasswordForm = ({ isSubmitting }) => (
  <Form style={styles.form}>
    <Field
      component={TextField}
      name="password"
      label="Nueva Contraseña"
    />
    <HStack pb={2}>
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
