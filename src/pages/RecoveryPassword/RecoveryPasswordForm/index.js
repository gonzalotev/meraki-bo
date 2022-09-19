import { TextField } from 'components';
import { Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';
import { selectRecoveryStatus } from 'store/session/selector';
import { formStyles } from 'constant';

const RecoveryPasswordForm = ({ isSubmitting, goToLogin, status }) => (
  <Form style={formStyles.recovery}>
    <Field
      component={TextField}
      name="email"
      label="Email"
    />
    <HStack pb={2}>
      <Button
        disabled={isSubmitting || status.isFetching}
        bg="pink.600"
        onClick={goToLogin}
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        disabled={isSubmitting || status.isFetching}
        bg="pink.300"
        isLoading={status.isFetching}
      >
        Enviar
      </Button>
    </HStack>
  </Form>
);

export default connect(
  state => ({ status: selectRecoveryStatus(state) }),
  dispatch => ({ goToLogin: () => dispatch(push('/Ingresar')) }),
)(RecoveryPasswordForm);
