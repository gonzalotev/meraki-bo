import { Container, Stack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { recoveryPasswordRequest } from 'store/session/reducer';
import { selectRecoveryStatus, selectRecoveryToken } from 'store/session/selector';
import { useEffect, useState } from 'react';
import recoveryPasswordSchema from 'schemas/recoveryPasswordSchema';
import RecoveryPasswordForm from './RecoveryPasswordForm';
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
    <Container>
      <Stack bg="base" mx="auto" mt={20} maxW="400px" minH="500px" justifyContent="center" overflow="auto">
        {step === 0 && (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            component={RecoveryPasswordForm}
            validationSchema={recoveryPasswordSchema}
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
