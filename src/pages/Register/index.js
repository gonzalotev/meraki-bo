import { Formik } from 'formik';
import { connect } from 'react-redux';
import { registerRequest } from 'store/session/reducer';
import { Container, Heading, Stack } from '@chakra-ui/react';
import RegisterForm from './RegisterForm';
import validationSchema from './validationSchema';

const Register = ({ onSubmit }) => {
  const initialValues = { email: '', password: '', role: '' };
  return (
    <Container maxW="full" centerContent h="100%" justifyContent="center">
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center">
        <Heading color="pink.300" textAlign="center" m={5}>Registro</Heading>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          component={RegisterForm}
          validationSchema={validationSchema}
        />
      </Stack>
    </Container>
  );
};

export default connect(null, { onSubmit: registerRequest })(Register);
