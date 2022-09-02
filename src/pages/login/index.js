import { Formik } from 'formik';
import {
  Container, Title, Resetpass, Wrapper,
} from './styled';
import LoginForm from './login-form';
import validationSchema from './validation-schema';

const Login = () => {
  const initialValues = { email: '', password: '' };
  const handleSubmit = (values, actions) => {
    actions.resetForm({ values });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Bienvenido</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          component={LoginForm}
          validationSchema={validationSchema}
        />
        <Resetpass to="/Recuperar-Contraseña">¿Perdiste tu contraseña? </Resetpass>
      </Wrapper>
    </Container>
  );
};

export default Login;
