import { VStack, Text, Heading } from '@chakra-ui/react';

const User = ({ protocol }) => (
  <VStack w="100%" p={5} className="print">
    <Heading pb={5}>{protocol.title}</Heading>
    <Text as="pre" textAlign="justify" pb={5} whiteSpace="pre-wrap">{protocol.content}</Text>
    <Text as="pre" pt={5} fontSize={12} textAlign="left">{protocol.signature}</Text>
  </VStack>
);

export default User;
