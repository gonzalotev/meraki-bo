import { Container, Stack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { resetPasswordRequest } from 'store/session/reducer';
import { selectResetStatus, selectRecoveryToken } from 'store/session/selector';
import { useEffect, useState } from 'react';
import { useQuery } from 'hooks';
import resetPasswordSchema from 'schemas/resetPasswordSchema';
import ResetPasswordForm from './ResetPasswordForm';
import FeedbackMessage from './FeedbackMessage';

const ResetPassword = ({ onSubmit, status }) => {
  const [step, setStep] = useState(0);
  const initialValues = { password: '' };
  const token = useQuery().get('token');
  const handleSubmit = (values) => onSubmit({ ...values, token });

  useEffect(() => {
    if (status?.isFetched && status?.success) {
      setStep(1);
    }
  }, [status]);

  return (
    <Container maxW="full" centerContent h="100%" justifyContent="center">
      <Stack bg="base" m={10} minW="400px" minH="500px" justifyContent="center" overflow="auto">
        {step === 0 && (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            component={ResetPasswordForm}
            validationSchema={resetPasswordSchema}
          />
        )}
        {step === 1 && <FeedbackMessage />}
      </Stack>
    </Container>
  );
};

export default connect(
  state => ({ recoveryToken: selectRecoveryToken(state), status: selectResetStatus(state) }),
  { onSubmit: resetPasswordRequest },
)(ResetPassword);
