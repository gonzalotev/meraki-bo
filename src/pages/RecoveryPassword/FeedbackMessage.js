import { Heading, Text, VStack } from '@chakra-ui/react';

const FeedbackMessage = () => (
  <VStack>
    <Heading color="pink.300" pb={5}>Email Enviado</Heading>
    <Text>Se envió un mail de recuperación</Text>
    <Text>por favor revise su correo en recibidos o span.</Text>
  </VStack>
);

export default FeedbackMessage;
