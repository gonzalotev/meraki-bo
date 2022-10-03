import { Container, Stack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { recoveryPasswordRequest } from 'store/session/reducer';
import { selectRecoveryStatus, selectRecoveryToken } from 'store/session/selector';
import { useEffect, useState } from 'react';
import RecoveryPasswordForm from './RecoveryPasswordForm';
import validationSchema from './validationSchema';
import FeedbackMessage from './FeedbackMessage';

const RecoveryPassword = ({ onSubmit, status }) => {
  const [step, setStep] = useState(0);
  const initialValues = { email: '' };
  const handleSubmit = (values) => onSubmit(values);

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
            component={RecoveryPasswordForm}
            validationSchema={validationSchema}
          />
        )}
        {step === 1 && <FeedbackMessage />}
      </Stack>
    </Container>
  );
};

export default connect(
  state => ({ recoveryToken: selectRecoveryToken(state), status: selectRecoveryStatus(state) }),
  { onSubmit: recoveryPasswordRequest },
)(RecoveryPassword);