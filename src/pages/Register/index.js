import { Formik } from 'formik';
import { connect } from 'react-redux';
import { registerRequest } from 'store/session/reducer';
import { Container, Stack } from '@chakra-ui/react';
import registerSchema from 'schemas/registerSchema';
import { Title } from 'components';
import RegisterForm from './RegisterForm';

const Register = ({ onSubmit }) => {
  const initialValues = { email: '', password: '', role: '' };
  return (
    <Container>
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center">
        <Title title="Registro" />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          component={RegisterForm}
          validationSchema={registerSchema}
        />
      </Stack>
    </Container>
  );
};

export default connect(null, { onSubmit: registerRequest })(Register);
