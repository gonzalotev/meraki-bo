import { Formik } from 'formik';
import { connect } from 'react-redux';
import { loginRequest } from 'store/session/reducer';
import {
  Container, Heading, Link, Stack,
} from '@chakra-ui/react';
import LoginForm from './login-form';
import validationSchema from './validationSchema';

const Login = ({ onSubmit }) => {
  const initialValues = { email: '', password: '' };
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm({ values });
  };
  return (
    <Container maxW="full" centerContent h="100%" justifyContent="center">
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center">
        <Heading color="pink.300" textAlign="center" mb={5}>Bienvenido</Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          component={LoginForm}
          validationSchema={validationSchema}
        />
        <Link href="/Recuperar" color="pink.300" textAlign="center" p={2}>
          ¿Perdiste tu contraseña?
        </Link>
      </Stack>
    </Container>
  );
};

export default connect(null, { onSubmit: loginRequest })(Login);
