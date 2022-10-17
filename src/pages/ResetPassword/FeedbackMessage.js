import {
  Button, Heading, VStack,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';

const FeedbackMessage = ({ goToLogin }) => (
  <VStack>
    <Heading color="pink.300" pb={5} mx={3}>Su Contraseña </Heading>
    <Heading color="pink.300" pb={5} mx={3}>se cambió con éxito </Heading>
    <Button onClick={goToLogin}>INGRESAR</Button>
  </VStack>
);

export default connect(
  null,
  dispatch => ({ goToLogin: () => dispatch(push('/login')) }),
)(FeedbackMessage);
