import { Stack, Text, Wrap } from '@chakra-ui/react';
import bgImage from 'assets/bgImage.jpeg';
import { messages } from 'constant';
import DutyCard from './DutyCard';

const UserDuty = ({ duties, enrollment }) => (
  <Stack bgImg={bgImage} maxW="1110px" w="100%" p={5}>
    <Text fontSize={34} bg="pink.200" alignSelf="center" px={8} py={2} mb={5} mt={5}>
      {enrollment.name}
      : $
      {enrollment.price}
    </Text>
    <Wrap justify="center">
      {duties.map(duty => <DutyCard key={duty.id} duty={duty} />)}
      {duties.length === 0 && <Text w="100%" textAlign="center">{messages.EMPTY_DUTIES}</Text>}
    </Wrap>
  </Stack>
);

export default UserDuty;
