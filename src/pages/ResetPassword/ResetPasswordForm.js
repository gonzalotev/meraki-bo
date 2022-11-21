import { FormButtons, PasswordField } from 'components';
import { Text } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { styles } from 'constant';

const ResetPasswordForm = ({ isSubmitting }) => (
  <Form noValidate style={styles.form}>
    <Text px={5}>Por favor, a continuación ingresa una nueva clave.</Text>
    <Text px={5}>Debe contener entre 8 y 16 caracteres.</Text>
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
    <FormButtons
      isDisabled={isSubmitting}
      submitText="Enviar"
    />
  </Form>
);

export default ResetPasswordForm;
