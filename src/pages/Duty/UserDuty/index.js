import { HStack, Stack, Text } from '@chakra-ui/react';
import DutyCard from './DutyCard';

const UserDuty = ({ duties }) => (
  <Stack
    bgGradient="linear(to-t, green.100, pink.100)"
    maxW="1200px"
    h="100%"
    maxH="500px"
    w="100%"
  >
    <Text fontSize={34} bg="pink.200" mx="auto" alignSelf="center" px={8} py={2} mt={5}>Matricula $500</Text>
    <HStack overflowX="auto" w="100%" flex={1} px={5}>
      {duties.map(duty => <DutyCard key={duty.id} duty={duty} />)}
      {duties.length === 0 && <Text w="100%" textAlign="center">No hay aranceles disponibles</Text>}
    </HStack>
  </Stack>
);

export default UserDuty;
