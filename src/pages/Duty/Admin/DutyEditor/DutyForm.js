import { FormButtons, NumberField, SelectField } from 'components';
import { Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';
import { selectTopics } from 'store/staticData/selector';
import { push } from 'redux-first-history';

const DutyForm = ({
  status, isSubmitting, topics, goTo,
}) => (
  <Form noValidate>
    <Box shadow="base">
      <Field
        component={SelectField}
        getOptionLabel={option => option.name}
        getOptionValue={option => option?.id}
        options={topics}
        name="idDiscipline"
        label="Disciplina"
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
      submitText="Guardar"
    />
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state), topics: selectTopics(state) }),
  dispatch => ({ goTo: () => dispatch(push('/duty')) }),
)(DutyForm);
