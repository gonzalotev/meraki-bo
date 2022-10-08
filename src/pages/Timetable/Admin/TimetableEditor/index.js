import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectTimetable } from 'store/timetable/selector';
import {
  Container, Wrap, Text,
} from '@chakra-ui/react';
import { cleanTimetable, fetchTimetableRequest, saveTimetableRequest } from 'store/timetable/reducer';
import { useParams } from 'react-router';
import { defaultValues } from 'constant';
import TimetableForm from './TimetableForm';
import validetionSchema from './validationSchema';

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
    <Container>
      <Text>Horarios</Text>
      <Wrap>
        <Text>Campos Obligatorios (*)</Text>
        <Formik
          component={TimetableForm}
          validationSchema={validetionSchema}
          initialValues={{ ...defaultValues.timetable, ...timetable }}
          onSubmit={onSubmit}
          enableReinitialize
        />
      </Wrap>
    </Container>
  );
};

export default connect(
  (state) => ({ timetable: selectTimetable(state) }),
  { onSubmit: saveTimetableRequest, fetchTimetable: fetchTimetableRequest, onRemove: cleanTimetable },
)(TimetableEditor);
