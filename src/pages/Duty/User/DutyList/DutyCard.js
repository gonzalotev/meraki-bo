import { Box, Text } from '@chakra-ui/react';

const DutyCard = ({ duty = {} }) => (
  <Box textAlign="center" minW="350px" p={8} border="2px lightGrey solid" borderRadius={5} shadow="base">
    <Text fontSize={22} fontWeight="bold">{duty.title}</Text>
    {duty.subtitle && <Text fontSize={18}>{duty.subtitle}</Text>}
    <Box bg="pink.300" maxW={150} mx="auto" mt={5}>
      <Text color="white">
        {`$ ${duty.price}`}
      </Text>
    </Box>
  </Box>
);

export default DutyCard;
