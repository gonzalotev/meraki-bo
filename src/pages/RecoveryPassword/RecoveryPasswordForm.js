import { FormButtons, TextField } from 'components';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';
import { selectRecoveryStatus } from 'store/session/selector';
import { styles } from 'constant';

const RecoveryPasswordForm = ({ isSubmitting, goToLogin, status }) => (
  <Form noValidate style={styles.form}>
    <Field
      component={TextField}
      name="email"
      label="Email"
    />
    <FormButtons
      onCancel={goToLogin}
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
    />
  </Form>
);

export default connect(
  state => ({ status: selectRecoveryStatus(state) }),
  dispatch => ({ goToLogin: () => dispatch(push('/login')) }),
)(RecoveryPasswordForm);
