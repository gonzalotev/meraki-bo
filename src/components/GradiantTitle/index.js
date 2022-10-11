import { Box, Stack, Text } from '@chakra-ui/react';

const GradiantTitle = ({ title, caption }) => (
  <Stack
    maxW={700}
    w="100%"
    pb={2}
    bgGradient="linear(to-t,pink.100, green.100)"
    borderRadius={5}
    shadow="lg"
    m="auto"
  >
    <Box w={350} textAlign="center" m="auto" my={2}>
      <Text fontSize="4xl">{title}</Text>
      {caption && <Text fontSize="xs">{caption}</Text>}
    </Box>
  </Stack>
);

export default GradiantTitle;
