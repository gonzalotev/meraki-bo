import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Container, Text } from '@chakra-ui/react';
import { saveDisciplineRequest } from 'store/discipline/reducer';
import { defaultValues } from 'constant';
import Title from 'components/Title';
import disciplineSchema from 'schemas/disciplineSchema';
import DisciplineForm from './DisciplineForm';

const DisciplineEditor = ({ onSubmit }) => (
  <Container maxW="max-content">
    <Title title="Disciplina" />
    <Text>Campos Obligatorios (*)</Text>
    <Formik
      component={DisciplineForm}
      initialValues={defaultValues.discipline}
      validationSchema={disciplineSchema}
      onSubmit={onSubmit}
      enableReinitialize
    />
  </Container>
);

export default connect(
  null,
  { onSubmit: saveDisciplineRequest },
)(DisciplineEditor);
