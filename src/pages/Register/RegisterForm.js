import {
  TextField, PasswordField, SelectField, FormButtons,
} from 'components';
import { connect } from 'react-redux';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import { selectRoles } from 'store/staticData/selector';
import { styles } from 'constant';

const RegisterForm = ({ status, isSubmitting, roles }) => (
  <Form noValidate style={styles.form}>
    <Field
      component={TextField}
      name="email"
      label="Email"
    />
    <Field
      component={PasswordField}
      name="password"
      label="Contraseña"
    />
    <Field
      component={SelectField}
      getOptionLabel={option => option.name}
      getOptionValue={option => option?.id}
      options={roles}
      name="role"
      label="Rol"
    />
    <FormButtons
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
      submitText="Guardar"
    />
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state), roles: selectRoles(state) }),
)(RegisterForm);
