import { TextField, PasswordField } from 'components';
import { connect } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import { styles } from 'constant';

const LoginForm = ({ status, isSubmitting }) => (
  <Form style={styles.form}>
    <Field
      component={TextField}
      name="email"
      label="Email"
    />
    <Field
      component={PasswordField}
      autoComplete="off"
      name="password"
      label="Contraseña"
    />
    <Button
      type="submit"
      disabled={!!isSubmitting}
      isLoading={status.isFetching}
      bg="pink.300"
      color="white"
    >
      Ingresar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(LoginForm);