import {
  Button, Heading, Text, VStack,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { push } from 'redux-first-history';

const FeedbackMessage = ({ goToLogin }) => (
  <VStack>
    <Heading color="pink.300" pb={5}>Clave Cambiada</Heading>
    <Text>Se cambio su clave con exito</Text>
    <Button onClick={goToLogin}>Ir al login</Button>
  </VStack>
);

export default connect(
  null,
  dispatch => ({ goToLogin: () => dispatch(push('/Ingresar')) }),
)(FeedbackMessage);
