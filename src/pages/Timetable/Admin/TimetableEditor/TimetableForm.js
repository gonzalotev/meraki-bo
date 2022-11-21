import { TextField, SelectField, FormButtons } from 'components';
import { Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/timetable/selector';
import { selectTopics } from 'store/staticData/selector';
import { daysOptions } from 'constant';
import { push } from 'redux-first-history';

const TimetableForm = ({
  status, isSubmitting, topics, goTo,
}) => (
  <Form noValidate>
    <Box shadow="base">
      <Field
        name="discipline"
        component={SelectField}
        getOptionLabel={option => option.name}
        getOptionValue={option => option?.id}
        options={topics}
        isRequired
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
      />
    </Box>
    <Box shadow="base">
      <Field
        name="day"
        component={SelectField}
        options={daysOptions}
        label="Día"
        isRequired
      />
    </Box>
    <FormButtons
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
      onCancel={goTo}
      submitText="Guardar"
    />
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state), topics: selectTopics(state) }),
  dispatch => ({ goTo: () => dispatch(push('/timetable')) }),
)(TimetableForm);
