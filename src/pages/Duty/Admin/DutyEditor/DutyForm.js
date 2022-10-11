import { TextField, NumberField, SelectField } from 'components';
import { Button, Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';
import { selectTopics } from 'store/staticData/selector';

const DutyForm = ({ status, isSubmitting, topics }) => (
  <Form>
    <Box shadow="base">
      <Field
        component={SelectField}
        getOptionLabel={option => option.name}
        getOptionValue={option => option?.id}
        options={topics}
        name="title"
        label="disciplina"
      />
    </Box>
    <Box shadow="base">
      <Field
        name="subtitle"
        component={TextField}
        label="subtítulo"
        isDisabled={status.isFetching}
      />
    </Box>
    <Box shadow="base">
      <Field
        name="price"
        component={NumberField}
        label="Arancel"
        isDisabled={status.isFetching}
      />
    </Box>
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

export default connect(state => ({ status: selectStatus(state), topics: selectTopics(state) }))(DutyForm);
