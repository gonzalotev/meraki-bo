import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectTimetable } from 'store/timetable/selector';
import { Container, Text } from '@chakra-ui/react';
import { cleanTimetable, fetchTimetableRequest, saveTimetableRequest } from 'store/timetable/reducer';
import { useParams } from 'react-router';
import { defaultValues } from 'constant';
import validationSchema from 'schemas/timetableSchema';
import Title from 'components/Title';
import TimetableForm from './TimetableForm';

const TimetableEditor = ({
  onSubmit, timetable, fetchTimetable, onRemove,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchTimetable({ id });
    }
    return onRemove;
  }, [id]);

  return (
    <Container maxW="max-content">
      <Title title="Horarios" />
      <Text>Campos Obligatorios (*)</Text>
      <Formik
        component={TimetableForm}
        validationSchema={validationSchema}
        initialValues={{ ...defaultValues.timetable, ...timetable }}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default connect(
  (state) => ({ timetable: selectTimetable(state) }),
  { onSubmit: saveTimetableRequest, fetchTimetable: fetchTimetableRequest, onRemove: cleanTimetable },
)(TimetableEditor);
