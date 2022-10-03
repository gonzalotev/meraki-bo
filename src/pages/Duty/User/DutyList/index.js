import { HStack, Stack, Text } from '@chakra-ui/react';
import bgDuty from 'assets/bgDuty.jpeg';
import DutyCard from './DutyCard';

const UserDuty = ({ duties }) => (
  <Stack
    display="flex"
    bgImg={bgDuty}
    maxW="1000px"
    h="100%"
    maxH="600px"
    w="100%"
  >
    <Text fontSize={34} bg="pink.200" mx="auto" alignSelf="center" px={8} py={2} mt={5}>Matricula $500</Text>
    <HStack w="100%" flex={1} px={5}>
      {duties.map(duty => <DutyCard key={duty.id} duty={duty} />)}
      {duties.length === 0 && <Text w="100%" textAlign="center">No hay aranceles disponibles</Text>}
    </HStack>
  </Stack>
);

export default UserDuty;
