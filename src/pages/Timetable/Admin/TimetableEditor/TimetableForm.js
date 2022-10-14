import { TextField, SelectField } from 'components';
import { Box, Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/timetable/selector';
import { selectTopics } from 'store/staticData/selector';
import { daysOptions } from 'constant';
import { push } from 'redux-first-history';

const TimetableForm = ({
  status, isSubmitting, topics, goTo,
}) => (
  <Form style={{ height: '100%' }}>
    <Box shadow="base">
      <Field
        component={SelectField}
        getOptionLabel={option => option.name}
        getOptionValue={option => option?.id}
        options={topics}
        isRequired
        name="discipline"
        label="Disciplina"
      />
    </Box>
    <Box shadow="base">
      <Field
        type="time"
        name="schedule"
        component={TextField}
        label="Horario"
        isRequired
        isDisabled={status.isFetching}
      />
    </Box>
    <Box shadow="base">
      <Field
        name="day"
        component={SelectField}
        options={daysOptions}
        label="Día"
        isRequired
        isDisabled={status.isFetching}
      />
    </Box>
    <HStack pb={2} justifyContent="center" my={5}>
      <Button onClick={goTo}>
        Cancelar
      </Button>
      <Button
        type="submit"
        isDisabled={!!isSubmitting}
        isLoading={status.isFetching}
        bg="pink.300"
        my={5}
      >
        Guardar
      </Button>
    </HStack>
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state), topics: selectTopics(state) }),
  dispatch => ({ goTo: () => dispatch(push('/timetable')) }),
)(TimetableForm);
