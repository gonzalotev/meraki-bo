import { Formik } from 'formik';
import { connect } from 'react-redux';
import { loginRequest } from 'store/session/reducer';
import { Container, Link, Stack } from '@chakra-ui/react';
import loginSchema from 'schemas/loginSchema';
import { Title } from 'components';
import LoginForm from './LoginForm';

const Login = ({ onSubmit }) => {
  const initialValues = { email: '', password: '' };
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm({ values });
  };
  return (
    <Container centerContent>
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center" p={5}>
        <Title title="Bienvenido" />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          component={LoginForm}
          validationSchema={loginSchema}
        />
        <Link href="/recovery" color="pink.300" textAlign="center" p={2}>
          ¿Perdiste tu contraseña?
        </Link>
      </Stack>
    </Container>
  );
};

export default connect(null, { onSubmit: loginRequest })(Login);
