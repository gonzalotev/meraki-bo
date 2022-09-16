import { Box, Container, Text } from '@chakra-ui/react';

const dutyTable = (dutys) => (
  <Container
    textAlign="center"
    bgGradient="linear(to-t, green.100, pink.100)"
    maxW={1000}
    maxH={800}
    h={800}
  >
    <Text fontSize={70} color="pink.300">Aranceles</Text>
    <Text fontSize={40} bg="pink.200" w={300} mx="auto" my={10}>Matricula $500</Text>
    <Container display="flex" justifyContent="center" alignItems="flex-end">
      {dutys ? dutys.map((duty) => (
        <Container key={duty.id} textAlign="center" m={5}>
          <Box fontSize={30} m={5} W={600}>
            {duty.title}
            {duty.subtitle.length !== '' ? (
              <Text fontSize={20} maxW={300}>
                {duty.subtitle}
              </Text>
            ) : ''}
            <Box bg="pink" maxW={150} mx="auto" mt={5}>
              $
              {duty.duty}
            </Box>
          </Box>
        </Container>
      )) : <Text>No hay aranceles disponibles</Text>}
    </Container>
  </Container>
);

export default dutyTable;
