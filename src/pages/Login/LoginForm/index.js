import { TextField, PasswordField } from 'components';
import { connect } from 'react-redux';
import { Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import { styles } from 'constant';
import { push } from 'redux-first-history';

const LoginForm = ({ status, isSubmitting, goTo }) => (
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
    <HStack pb={2} justifyContent="center">
      <Button onClick={goTo}>
        Cancelar
      </Button>
      <Button
        type="submit"
        disabled={!!isSubmitting}
        isLoading={status.isFetching}
        bg="pink.300"
        color="white"
      >
        Aceptar
      </Button>
    </HStack>
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state) }),
  dispatch => ({ goTo: () => dispatch(push('/')) }),
)(LoginForm);
