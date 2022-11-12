import { TextField, PasswordField, FormButtons } from 'components';
import { connect } from 'react-redux';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import { styles } from 'constant';
import { push } from 'redux-first-history';

const LoginForm = ({ status, isSubmitting, goTo }) => (
  <Form noValidate style={styles.form}>
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
    <FormButtons
      onCancel={goTo}
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
      submitText="Ingresar"
      hiddenIcon
    />
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state) }),
  dispatch => ({ goTo: () => dispatch(push('/')) }),
)(LoginForm);
