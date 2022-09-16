import { Formik } from 'formik';
import {
  Container, Heading, Stack, Box, Text,
} from '@chakra-ui/react';
import registerForm from './register-form';

const Form = () => {
  const initialValues = { name: '' };

  return (
    <Container maxW="full" alignItems="center" h="100%" justifyContent="center">
      <Stack bg="white" justifyContent="center">
        <Container
          maxW={700}
          w="100%"
          maxH={200}
          h="100%"
          bgGradient="linear(to-t,pink.100, green.100)"
          borderRadius={5}
          shadow="lg"
        >
          <Box w={350} textAlign="center" m="auto" my={2}>
            <Text fontSize="4xl">INSCRIPCIONES</Text>
            <Text fontSize="xs">MERAKI - ESPACIO ARTISTICO</Text>
          </Box>
        </Container>
        <Formik
          initialValues={initialValues}
          component={registerForm}
        />
      </Stack>
    </Container>
  );
};

export default Form;
