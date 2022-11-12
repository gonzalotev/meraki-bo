import { Text, VStack } from '@chakra-ui/react';
import { Title } from 'components';

const FeedbackMessage = () => (
  <VStack>
    <Title title="Email Enviado" />
    <Text>Se envió un mail de recuperación</Text>
    <Text>por favor revise su correo en recibidos o spam.</Text>
  </VStack>
);

export default FeedbackMessage;
