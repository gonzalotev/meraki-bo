import { TextField, PasswordField } from 'components';
import { getFieldError } from 'utils';
import { connect } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
};

const LoginForm = ({
  status, isSubmitting, submitCount, touched, errors, handleChange, values,
}) => (
  <Form style={style}>
    <Field
      component={TextField}
      name="email"
      label="Email"
      error={getFieldError(submitCount, touched, errors, 'email')}
      onChange={handleChange}
      value={values.email}
    />
    <Field
      component={PasswordField}
      autoComplete="off"
      name="password"
      label="Contraseña"
      error={getFieldError(submitCount, touched, errors, 'password')}
      onChange={handleChange}
      value={values.password}
      isDisabled={status.isFetching}
    />
    <Button
      type="submit"
      disabled={!!isSubmitting}
      isLoading={status.isFetching}
      bg="pink.300"
    >
      Ingresar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(LoginForm);
