import { Button, VStack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';
import { Title } from 'components';

const FeedbackMessage = ({ goToLogin }) => (
  <VStack>
    <Title title="Contraseña actualizada!" />
    <Button onClick={goToLogin}>INGRESAR</Button>
  </VStack>
);

export default connect(
  null,
  dispatch => ({ goToLogin: () => dispatch(push('/login')) }),
)(FeedbackMessage);
