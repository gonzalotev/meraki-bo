import { VStack, Text } from '@chakra-ui/react';
import { Title } from 'components';

const User = ({ protocol }) => (
  <VStack w="100%" p={5} className="print">
    <Title title={protocol.title} />
    <Text as="pre" textAlign="justify" pb={5} whiteSpace="pre-wrap">{protocol.content}</Text>
    <Text as="pre" pt={5} fontSize={12} textAlign="left">{protocol.signature}</Text>
  </VStack>
);

export default User;
