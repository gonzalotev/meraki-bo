import { Box, Text } from '@chakra-ui/react';

const DutyCard = ({ duty = {} }) => (
  <Box textAlign="center" minW="350px" p={5}>
    <Text fontSize={22} fontWeight="bold">{duty.title}</Text>
    {duty.subtitle && <Text fontSize={18}>{duty.subtitle}</Text>}
    <Box bg="pink" maxW={150} mx="auto" mt={5}>
      {`$ ${duty.price}`}
    </Box>
  </Box>
);

export default DutyCard;
