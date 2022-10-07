import { connect } from 'react-redux';
import { Formik } from 'formik';
import {
  Container, Stack, Box, Text,
} from '@chakra-ui/react';
import { cleanInscription, fetchInscriptionsRequest, saveInscriptionRequest } from 'store/inscription/reducer';
import { selectInscription } from 'store/inscription/selector';
import { defaultValues } from 'constant';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import registerForm from './inscriptionForm';
import validationSchema from './validationSchema';

const InscriptionUser = ({
  onSubmit, inscription, fetchInscription, onRemove,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchInscription({ id });
    }
    return onRemove;
  }, [id]);

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
          initialValues={{ ...defaultValues.inscription, ...inscription }}
          component={registerForm}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        />
      </Stack>
    </Container>
  );
};

export default connect(
  (state) => ({ inscription: selectInscription(state) }),
  { onSubmit: saveInscriptionRequest, fetchInscription: fetchInscriptionsRequest, onRemove: cleanInscription },
)(InscriptionUser);
