/* eslint-disable react/prop-types */
import { TextInput } from '../../../components';
import { getFieldError } from '../../../utils';
import { Button, Form } from './styled';

const LoginForm = ({
  isSubmitting, submitCount, touched, errors, handleChange, values,
}) => (
  <Form style={{
    display: 'flex', alignItems: 'center', width: '100%', flexDirection: 'col',
  }}
  >
    <TextInput
      name="email"
      placeholder="nla"
      error={getFieldError(submitCount, touched, errors, 'email')}
      onChange={handleChange}
      value={values.email}
    />
    <TextInput
      name="password"
      placeholder="Contraseña"
      type="password"
      error={getFieldError(submitCount, touched, errors, 'password')}
      onChange={handleChange}
      value={values.password}
    />
    <Button type="submit" disabled={!!isSubmitting}>Ingresar</Button>
  </Form>
);

export default LoginForm;
