import { TextField, SelectField } from 'components';
import { Button, Container } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/timetable/selector';
import { selectTopics } from 'store/staticData/selector';

const TimetableForm = ({ status, isSubmitting, topics }) => (
  <Form>
    <Container shadow="base">
      <Field
        component={SelectField}
        getOptionLabel={option => option.name}
        getOptionValue={option => option?.id}
        options={topics}
        name="discipline"
        label="disciplina"
      />
    </Container>
    <Container shadow="base">
      <Field
        type="time"
        name="schedule"
        component={TextField}
        label="Horario"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container shadow="base">
      <Field
        name="day"
        component={TextField}
        label="Dia"
        isDisabled={status.isFetching}
      />
    </Container>
    <Button
      type="submit"
      isDisabled={!!isSubmitting}
      isLoading={status.isFetching}
      bg="pink.300"
      my={5}
    >
      Guardar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state), topics: selectTopics(state) }))(TimetableForm);
