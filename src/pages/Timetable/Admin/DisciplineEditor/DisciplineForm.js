import { FormButtons, TextField } from 'components';
import { Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/discipline/selector';
import { push } from 'redux-first-history';

const DisciplineForm = ({ status, isSubmitting, goTo }) => (
  <Form noValidate>
    <Box shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Disciplina"
        isRequired
        isDisabled={status.isFetching}
      />
    </Box>
    <FormButtons
      onCancel={goTo}
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
    />
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state) }),
  dispatch => ({ goTo: () => dispatch(push('/timetable')) }),
)(DisciplineForm);
