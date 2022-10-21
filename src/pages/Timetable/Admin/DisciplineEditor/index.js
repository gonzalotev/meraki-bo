import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Container, Text, VStack } from '@chakra-ui/react';
import { saveStaticDataRequest } from 'store/staticData/reducer';
import { defaultValues } from 'constant';
import DisciplineForm from './DisciplineForm';

const TimetableEditor = ({ onSubmit }) => (
  <Container>
    <VStack mt={5}>
      <Text fontWeight="bold">Disciplina</Text>
      <Text>Campos Obligatorios (*)</Text>
    </VStack>
    <Formik
      component={DisciplineForm}
      initialValues={{ ...defaultValues.discipline }}
      onSubmit={onSubmit}
      enableReinitialize
    />
  </Container>
);

export default connect(
  null,
  { onSubmit: saveStaticDataRequest },
)(TimetableEditor);
