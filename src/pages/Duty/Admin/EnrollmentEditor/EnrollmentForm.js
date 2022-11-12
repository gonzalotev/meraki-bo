import { NumberField, TextField, FormButtons } from 'components';
import { Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';
import { push } from 'redux-first-history';

const EnrollmentForm = ({ status, isSubmitting, goTo }) => (
  <Form noValidate>
    <Box shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Titulo"
        isDisabled={status.isFetching}
        isRequired
      />
    </Box>
    <Box shadow="base">
      <Field
        name="price"
        component={NumberField}
        label="Arancel"
        isDisabled={status.isFetching}
        isRequired
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
  dispatch => ({ goTo: () => dispatch(push('/duty')) }),
)(EnrollmentForm);
