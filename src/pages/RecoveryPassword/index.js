import { Container, Stack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { recoveryPasswordRequest, resetPasswordRequest } from 'store/session/reducer';
import { selectRecoveryToken } from 'store/session/selector';
import RecoveryPasswordForm from './RecoveryPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';
import validationSchema from './validation-schema';
import validationSchemaReset from './validation-schema-reset';

const RecoveryPassword = ({ onSubmit, onSubmitReset, recoveryToken }) => {
  const initialValues = {
    email: '',
    answers: ['', '', ''],
  };

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm({ values });
  };

  const handleSubmitReset = (values, actions) => {
    onSubmitReset({ password: values.password, recoveryToken });
    actions.resetForm({ values });
  };

  return (
    <Container maxW="full" centerContent h="100%" justifyContent="center">
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center" overflow="auto">
        {recoveryToken
          ? (
            <Formik
              initialValues={{ email: '' }}
              onSubmit={handleSubmitReset}
              component={ResetPasswordForm}
              validationSchema={validationSchemaReset}
            />
          )
          : (
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              component={RecoveryPasswordForm}
              validationSchema={validationSchema}
            />
          )}
      </Stack>
    </Container>
  );
};

export default connect(
  state => ({ recoveryToken: selectRecoveryToken(state) }),
  { onSubmit: recoveryPasswordRequest, onSubmitReset: resetPasswordRequest },
)(RecoveryPassword);
